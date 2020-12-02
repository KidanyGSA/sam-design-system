import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsContactComponent } from './contact.component';
import { SdsContactInfoComponent } from './contact-info.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [SdsContactComponent, SdsContactInfoComponent],
  declarations: [SdsContactComponent, SdsContactInfoComponent],
  providers: [],
})
export class SdsContactModule {}
