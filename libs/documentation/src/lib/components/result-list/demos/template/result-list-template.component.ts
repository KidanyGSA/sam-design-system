import {
  Component
} from '@angular/core';

@Component({
  selector: `result-list-template-demo`,
  templateUrl: './result-list-template.component.html'
})

export class ResultListTemplate {
  items = {
    results:[],
    title: 'No results found'
  };
}
