import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  SDS_DIALOG_SCROLL_STRATEGY_PROVIDER,
  SdsDialog
} from './dialog';
import { SdsDialogContainer } from './dialog-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  SdsDialogActions,
  SdsDialogClose,
  SdsDialogContent,
  SdsDialogTitle,
  SdsDialogSubtitle
} from './dialog-content.directives';

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule, FontAwesomeModule],
  exports: [
    SdsDialogContainer,
    SdsDialogActions,
    SdsDialogClose,
    SdsDialogContent,
    SdsDialogTitle,
    SdsDialogSubtitle
  ],
  declarations: [
    SdsDialogContainer,
    SdsDialogClose,
    SdsDialogTitle,
    SdsDialogSubtitle,
    SdsDialogActions,
    SdsDialogContent
  ],
  providers: [SdsDialog, SDS_DIALOG_SCROLL_STRATEGY_PROVIDER],
  entryComponents: [SdsDialogContainer]
})
export class SdsDialogModule { }
