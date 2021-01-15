import * as ejs from 'ejs';
import * as fs from 'fs-extra';
import * as glob from 'glob';
import * as path from 'path';

import {parseDemo} from './parse-demo';


const stackblitzUrl = 'https://stackblitz.com/run';
const packageJson = fs.readJsonSync('package.json');
const samLayoutsPackage = fs.readJsonSync("libs/packages/layouts/package.json");
const samComponentsPackage = fs.readJsonSync("libs/packages/components/package.json");
const samFormlyPackage = fs.readJsonSync("libs/packages/sam-formly/package.json");
const samMaterialExtensions = fs.readJsonSync("libs/packages/sam-material-extensions/package.json");

let dependencies = packageJson.dependencies;
const samDependencies = {
  '@gsa-sam/layouts': '10.0.5',
  '@gsa-sam/components': '10.0.5',
  '@gsa-sam/sam-formly': '10.0.5',
  '@gsa-sam/sam-material-extensions': '10.0.5',
};

dependencies = {...dependencies, ...samDependencies};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function fileContent(...parts: string[]) {
  return fs.readFileSync(path.join(...parts)).toString();
}

function getVersion(name) {
  const value = packageJson.dependencies[name] || packageJson.devDependencies[name];
  if (!value) {
    throw `couldn't find version for ${name}`;
  }
  return value;
}

/**
 * Generates StackBlitzes for all demos of all components and puts
 * resulting html files to the public folder of the demo application
 */

const indexFile = ejs.compile(fileContent('misc', 'stackblitzes-templates', 'index.html.ejs'));
const mainFile = ejs.compile(fileContent('misc', 'stackblitzes-templates', 'main.ts.ejs'));
const stackblitzFile = ejs.compile(fileContent('misc', 'stackblitzes-templates', 'stackblitz.html.ejs'));
const appComponent = ejs.compile(fileContent('misc', 'stackblitzes-templates', 'app.component.ejs'));
const appModule = ejs.compile(fileContent('misc', 'stackblitzes-templates', 'app.module.ejs'));

const base = path.join('apps', 'sam-design-system-site', 'src', 'assets', 'stackblitzes');
const root = path.join('libs', 'documentation', 'src', 'lib');

const initialData = {
  stackblitzUrl,
  dependencies: JSON.stringify(dependencies),
  tags: ['angular'],
  styles: fileContent('misc', 'stackblitzes-templates', 'styles.css'),
  files: [
    {name: 'src/polyfills.ts', source: fileContent('misc', 'stackblitzes-templates', 'polyfills.ts')},
    {name: 'tsconfig.json', source: fileContent('misc', 'stackblitzes-templates', 'tsconfig.json')},
    {name: 'angular.json', source: fileContent('misc', 'stackblitzes-templates', 'angular.json')}
  ]
};

// removing folder
fs.ensureDirSync(base);
fs.emptyDirSync(base);

// Getting demo modules metadata
const modulesInfo = parseDemo(path.join(root, '**', '*.ts'));

// re-creating all stackblitzes
modulesInfo.forEach((value, demoModule) => {
  let demoFolder = path.normalize(path.dirname(demoModule));
  const demoFiles = glob.sync(path.join(demoFolder, '*'), {});
  demoFolder = path.relative(root, path.resolve(demoFolder));

  const[, componentName, , demoName] = demoFolder.replace(root, '').split(path.sep);
  const modulePath = path.basename(demoModule, '.ts');

  const moduleInfo = modulesInfo.get(demoModule);
  const destinationFolder = path.join(base, componentName, demoName);

  const stackblitzData = {
    ...initialData,
    componentName,
    demoName,
    ...moduleInfo,
    modulePath: `./app/${modulePath}`,
    title: `ng-bootstrap - ${capitalize(componentName)} - ${capitalize(demoName)}`,
    tags: [...initialData.tags],
    files: [...initialData.files],
    openFile: `app/${moduleInfo.bootstrap.fileName}`
  };

  stackblitzData.tags.push(componentName);

  stackblitzData.files.push({name: 'src/index.html', source: indexFile(stackblitzData)});
  stackblitzData.files.push({name: 'src/main.ts', source: mainFile(stackblitzData)});
  stackblitzData.files.push({name: 'src/app.module.ts', source: appModule(stackblitzData)})
  stackblitzData.files.push({name: 'src/app.component.ts', source: appComponent(stackblitzData)});
  for (const file of demoFiles) {

    const destFile = path.basename(file);
    if (file.includes('header') && fs.lstatSync(file).isDirectory() ) {
      console.log('DIRECTORY', file, destFile);
    }
    try {
      stackblitzData.files.push({name: `src/app/${destFile}`, source: fs.readFileSync(file).toString()});
    } catch (exception) {
      console.log(file);
    }
  }
  fs.ensureDirSync(destinationFolder);
  fs.writeFileSync(path.join(destinationFolder, 'stackblitz.html'), stackblitzFile(stackblitzData));
});

console.log(`generated ${modulesInfo.size} stackblitze(s) from demo sources.`);
