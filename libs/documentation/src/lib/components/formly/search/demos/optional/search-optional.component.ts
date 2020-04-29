import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './search-optional.component.html',
})

export class SearchOptional {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'referenceNumber',
      type: 'input',
      templateOptions: {
        label: 'Reference Number',
        placeholder: 'A123456',
        description: 'If you have your own reference number you can add it here.'
      },
    },
  ];
}
