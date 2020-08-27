import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

export interface SdsFormlyDialogData {
  fields: FormlyFieldConfig[];
  originalFields: FormlyFieldConfig[];
  originalModel: any;
  cancel?: string;
  form?: FormGroup;
  model?: object;
  options?: FormlyFormOptions;
  submit?: string;
  subtitle?: string;
  title?: string;
  isAdvanceFilter?: boolean;
}
