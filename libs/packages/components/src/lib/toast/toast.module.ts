import { NgModule } from '@angular/core';
import { SdsToastComponent } from './toast-single.component';
import { CommonModule } from '@angular/common';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  exports: [SdsToastComponent],
  declarations: [SdsToastComponent],
  providers: [],
})
export class SdsToastModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, sds);
  }
}
