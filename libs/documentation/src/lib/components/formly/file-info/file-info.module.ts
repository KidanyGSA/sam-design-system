import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInfoBasic } from './demos/basic/file-info-basic.component';
import { DocumentationExamplesPage } from '../../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from '../../shared/index';
import { ComponentWrapperComponent } from '../../../shared/component-wrapper/component-wrapper.component';
import { FileInfoBasicModule } from './demos/basic/file-info-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form FileInfo',
    type: FileInfoBasic,
    code: require('!!raw-loader!./demos/basic/file-info-basic.component'),
    markup: require('!!raw-loader!./demos/basic/file-info-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly/file-info/demos/basic',
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    data: {
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyFieldCheckboxComponent',
          formType: 'checkbox',
        },
      ],
    },
    component: ComponentWrapperComponent,
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    FileInfoBasicModule,
  ],
})
export class FileInfoModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('fileInfo', DEMOS);
  }
}
