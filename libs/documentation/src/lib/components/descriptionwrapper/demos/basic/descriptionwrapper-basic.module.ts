import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { DescriptionWrapperBasic } from './descriptionwrapper-basic.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [DescriptionWrapperBasic],
  exports: [DescriptionWrapperBasic],
  bootstrap: [DescriptionWrapperBasic]
})
export class DescriptionWrapperBasicModule {}
