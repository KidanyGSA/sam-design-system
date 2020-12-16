import { Component, Input } from "@angular/core";

@Component({
  selector: `sds-readonly-radio`,
  template: `
    <label class="usa-label">{{label}}</label>
    <span *ngIf="!value; else selectedOption" class="text-bold">&mdash;</span>

    <ng-template #selectedOption>
    <span *ngFor="let option of selectOptions | formlySelectOptions | async; let i = index;">
      <span *ngIf="option.value === value" class="text-bold">{{option.label}}</span>
    </span>
    </ng-template>
  `,
})
export class ReadonlyRadioComponent {

  @Input() label: string;
  @Input() value: any;
  @Input() selectOptions: any[];

}