import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
/**
 * @param {string} [to.required] Makes the field required
 */
@Component({
  template: `
    <div *ngIf="to.readonlyMode" [ngClass]="to.readonlyClass">
      <sds-readonly-container [formlyFieldConfig]="field"></sds-readonly-container>
    </div>
    <ng-container *ngIf="!to.readonlyMode" #fieldComponent></ng-container>
  `,
})
export class FormlyReadonlyWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
