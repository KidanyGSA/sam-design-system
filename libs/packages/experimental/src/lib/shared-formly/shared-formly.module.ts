import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule, sdsWrappers } from '@gsa-sam/sam-formly';
import { FormlyFieldTextComponent } from './type/contact';
import { FormlyModule } from '@ngx-formly/core';
import { SdsContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [FormlyFieldTextComponent],
  imports: [
    CommonModule,
    FormsModule,
    SdsContactModule,
    //AgencyModalModule,
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
