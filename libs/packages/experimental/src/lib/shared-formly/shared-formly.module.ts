import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { sdsWrappers, SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyFieldTextComponent } from './type/contact';
import { FormlyModule } from '@ngx-formly/core';
import { SdsContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [FormlyFieldTextComponent],
  imports: [
    CommonModule,
    FormsModule,
    FormlyModule,
    SdsContactModule,
    ReactiveFormsModule,
    SdsFormlyModule.forChild({
      types: [
        {
          name: 'contact',
          component: FormlyFieldTextComponent,
          wrappers: sdsWrappers,
        },
      ],
    }),
  ],
})
export class SharedFormlyModule {}
