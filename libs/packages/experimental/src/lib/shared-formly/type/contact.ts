import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { SdsContactComponent } from '../../contact/contact.component';

import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-text',
  template: ` <sds-contact [formControl]="formControl"></sds-contact> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldTextComponent extends FieldType {
  @ViewChild(SdsContactComponent, { static: true })
  public template: SdsContactComponent;

  constructor(_cdr: ChangeDetectorRef) {
    super(); /* istanbul ignore next */
    // this.cdr = _cdr;
  }
}
