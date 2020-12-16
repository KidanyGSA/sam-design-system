import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-readonly-basic',
  templateUrl: './readonly-basic.component.html',
  styleUrls: ['./readonly-basic.component.scss']
})
export class ReadonlyBasicComponent {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        readonlyTemplate: (field) => {return `<label class="usa-label">First Name: ${field.model.firstName || ''}</label>`},
        label: 'First Name',
        description: 'Enter first name.',
        required: true,
      },
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        readonlyTemplate: (field) => {return `<label class="usa-label">Last Name: ${field.model.lastName || ''}</label>`},
        label: 'Last Name',
        description: 'Enter last name',
        required: true,
      },
    },
  ];

  onReadonlyToggle() {
    console.log(this.model.title);
    this.fields.forEach(field => field.templateOptions.readonlyMode = !field.templateOptions.readonlyMode);
  }

}
