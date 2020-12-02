import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsContactComponent } from './contact.component';
import { SdsContactInfoComponent } from './contact-info.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SdsContactComponent, SdsContactInfoComponent],
  declarations: [SdsContactComponent, SdsContactInfoComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SdsContactModule {}
