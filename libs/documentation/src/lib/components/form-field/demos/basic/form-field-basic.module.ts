import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { FormFieldBasic } from './form-field-basic.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormFieldBasic],
  exports: [FormFieldBasic],
  bootstrap: [FormFieldBasic]
})
export class FormFieldBasicModule {}
