import { NgModule } from "@angular/core";
import { ReadonlyAdvancedComponent } from './readonly-advanced.component';
import { FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    SdsFormlyModule, 
    FormsModule, 
    FormlyModule.forRoot()
  ],
  declarations: [
    ReadonlyAdvancedComponent
  ],
  exports: [
    ReadonlyAdvancedComponent
  ],
  bootstrap: [
    ReadonlyAdvancedComponent
  ]
})
export class ReadonlyAdvancedModule {}
