
import { Component, Input, OnInit } from "@angular/core";
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ReadonlyType } from './readonly-types';

@Component({
  selector: `sds-readonly-container`,
  templateUrl: './readonly-container.component.html',
})
export class ReadonlyContainerComponent implements OnInit {

  @Input() formlyFieldConfig: FormlyFieldConfig

  label: string;
  value: any;

  readonlyTypeEnum = ReadonlyType;

  ngOnInit() {
    this.label = this.formlyFieldConfig.templateOptions.label;
    this.value = this.formlyFieldConfig.formControl.value;
  }
}