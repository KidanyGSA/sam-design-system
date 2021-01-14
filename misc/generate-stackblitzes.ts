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

const versions = {
  angular: getVersion('@angular/core'),
  typescript: getVersion('typescript'),
  samStyles: getVersion('@gsa-sam/sam-styles'),
  samLayouts: samLayoutsPackage.version,
  samComponents: samComponentsPackage.version,
  samFormly: samFormlyPackage.version,
  samMaterialExtension: samMaterialExtensions.version,
  ngxFormly: getVersion('@ngx-formly/core'),
  fontawesomeAngular: getVersion('@fortawesome/angular-fontawesome'),
  fontawesomeSvgCore: getVersion('@fortawesome/fontawesome-svg-core'),
  fontawesomeBrandSvg: getVersion('@fortawesome/free-brands-svg-icons'),
  fontawesomeSolidSvg: getVersion('@fortawesome/free-solid-svg-icons'),
  videoPlayer: getVersion('accessible-html5-video-player'),
  ngxBootstrapIcons: getVersion('ngx-bootstrap-icons'),
  ngxMarkdown: getVersion('ngx-markdown'),
  ngxToastr: getVersion('ngx-toastr'),
  qs: getVersion('qs'),
  rxjs: getVersion('rxjs'),
  zoneJs: getVersion('zone.js'),
  coreJs: getVersion('core-js'),
  tslib: getVersion('tslib'),
};

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
  versions,
  dependencies: JSON.stringify({
    '@angular/animations': versions.angular,
    '@angular/cdk': versions.angular,
    '@angular/core': versions.angular,
    '@angular/common': versions.angular,
    '@angular/compiler': versions.angular,
    '@angular/material': versions.angular,
    '@angular/platform-browser': versions.angular,
    '@angular/platform-browser-dynamic': versions.angular,
    '@angular/router': versions.angular,
    '@angular/forms': versions.angular,
    '@gsa-sam/sam-styles': versions.samStyles,
    '@gsa-sam/layouts': versions.samLayouts,
    '@gsa-sam/components': versions.samComponents,
    '@gsa-sam/sam-formly': versions.samFormly,
    '@gsa-sam/sam-material-extensions': versions.samMaterialExtension,
    '@ngx-formly/core': versions.ngxFormly,
    '@fortawesome/angular-fontawesome': versions.fontawesomeAngular,
    '@fortawesome/fontawesome-svg-core': versions.fontawesomeSvgCore,
    '@fortawesome/free-brands-svg-icons': versions.fontawesomeBrandSvg,
    '@fortawesome/free-solid-svg-icons': versions.fontawesomeSolidSvg,
    'accessible-html5-video-player': versions.videoPlayer,
    'ngx-bootstrap-icons': versions.ngxBootstrapIcons,
    'ngx-markdown': versions.ngxMarkdown,
    'ngx-toastr': versions.ngxToastr,
    'qs': versions.qs,
    'core-js': versions.coreJs,
    'rxjs': versions.rxjs,
    'zone.js': versions.zoneJs,
    'tslib': versions.tslib,
  }),
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
