import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import sdk from "@stackblitz/sdk";
import { DEPENDENCIES } from '../dependencies';

@Component({
  selector: 'documentation-widget-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './demo.component.html'
})
export class DocumentationWidgetDemoComponent {
  @Input() demoTitle: string;
  @Input() component: string;
  @Input() id: string;
  @Input() code: string;
  @Input() markup: string;
  @Input() readme: string;
  @Input() path: string;
  @Input() files: { name: string; source: string }[];
  @Input() showCode = false;

  constructor() {}

  getGithubLink() {
    const baseRepoURL = 'https://github.com/GSA/sam-design-system/tree/master/';
    if(this.path){
      return baseRepoURL + this.path;
    }
    return false;
  }

  tabType(name: string) {
    const ext = name.split('.').pop();
    return (
      {
        html: 'HTML',
        scss: 'Style (SCSS)',
        css: 'Style (CSS)',
        ts: 'Typescript'
      }[ext] || 'Code'
    );
  }

  openOnStackblitz() {
    let filePath = `stackblitzes/${this.component}`;
    if (this.id) {
      filePath = `${filePath}/${this.id}`;
    }

    filePath = `${filePath}/stackblitz.html`;

    window.open(`../../../${filePath}`)

    return filePath;
  }

}
