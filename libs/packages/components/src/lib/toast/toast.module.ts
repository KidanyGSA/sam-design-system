import { NgModule } from '@angular/core';
import { SdsToastComponent } from './toast-single.component';
import { CommonModule } from '@angular/common';

import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

export let SdsToastSettings = {
  toastComponent: SdsToastComponent,
  timeOut: 6000,
  toastClass: 'sds-toast',
  positionClass: 'toast-bottom-left',
};

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  exports: [SdsToastComponent],
  declarations: [SdsToastComponent],
  entryComponents: [],
  providers: [],
})
export class SdsToastModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, sds);
  }
}
