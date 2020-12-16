import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../../shared/index';
import { ComponentWrapperComponent } from '../../../shared/component-wrapper/component-wrapper.component';
import { ReadonlyBasicComponent } from './demos/readonly-basic/readonly-basic.component';
import { ReadonlyBasicModule } from './demos/readonly-basic/readonly-basic.module';
import { ReadonlyAdvancedComponent } from './demos/readonly-advanced/readonly-advanced.component';
import { ReadonlyAdvancedModule } from './demos/readonly-advanced/readonly-advanced.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form Readonly',
    type: ReadonlyBasicComponent,
    code: require('!!raw-loader!./demos/readonly-basic/readonly-basic.component'),
    markup: require('!!raw-loader!./demos/readonly-basic/readonly-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly/readonly/demos/readonly-basic'
  },
  advanced: {
    title: 'Advanced Form Readonly',
    type: ReadonlyAdvancedComponent,
    code: require('!!raw-loader!./demos/readonly-advanced/readonly-advanced.component'),
    markup: require('!!raw-loader!./demos/readonly-advanced/readonly-advanced.component.html'),
    path: 'libs/documentation/src/lib/components/formly/readonly/demos/readonly-advanced'
  }
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
          name: 'FormlyFieldRadioComponent',
          formType: 'radio'
        }
      ]
    },
    component: ComponentWrapperComponent,
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    ReadonlyBasicModule,
    ReadonlyAdvancedModule,
  ]
})
export class ReadonlyModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('readonly', DEMOS);
  }
}

