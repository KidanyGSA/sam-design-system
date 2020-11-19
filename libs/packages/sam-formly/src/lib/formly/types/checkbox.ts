import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-checkbox',
  template: `
    <div class="usa-checkbox">
      <input
        [attr.aria-checked]="ariaChecked"
        class="usa-checkbox__input"
        type="checkbox"
        [class.is-invalid]="showError"
        [indeterminate]="to.indeterminate && formControl.value === null"
        [formControl]="formControl"
        [formlyAttributes]="field"
      />
      <label
        [attr.aria-checked]="ariaChecked"
        class="usa-checkbox__label"
        [for]="id"
      >
        {{ to.label }}
        <span *ngIf="!to.required && !to.hideOptional"> (Optional)</span>
      </label>
    </div>
  `
})
export class FormlyFieldCheckboxComponent extends FieldType implements OnInit {
  ariaChecked;
  defaultOptions = {
    templateOptions: {
      indeterminate: true,
      hideLabel: true
    }
  };
  constructor(private cdr: ChangeDetectorRef) {
    super();
  }
  ngOnInit() {
    console.log(this.formControl.value, 'test value checkbox');
    this.ariaChecked = this.formControl.value;

    this.formControl.valueChanges.subscribe(value => {
      // console.log(value, 'checkbox');
      // const isChecked =
      //   (Array.isArray(values) && values.length) > 0 ? true : false;
      // this.ariaChecked = isChecked.toString();
      this.cdr.detectChanges();
    });
  }
}
