import { Component, Input } from '@angular/core';

@Component({
  selector: `sds-readonly-multicheckbox`,
  template: `
  <label class="usa-label">{{label}}</label>
  <span *ngIf="!value; else definedValues" class="text-bold">&mdash;</span>

  <ng-template #definedValues>
    <span *ngIf="!multicheckboxOptions || !multicheckboxOptions.length; else selectedOption" class="text-bold">
      {{isObject(value) ? (value | json) : value}}
    </span>
  </ng-template>

  <ng-template #selectedOption>
    <span *ngFor="let option of multicheckboxOptions | formlySelectOptions | async">
      <span *ngIf="value[option.value]" class="text-bold display-block">{{option.label}}</span>
    </span>
  </ng-template>`,
})
export class ReadonlyMulticheckboxComponent {

  @Input() label: string;
  @Input() value: any;
  @Input() multicheckboxOptions: any[];

  isObject(value) {
    return typeof(value) === 'object';
  }
}