import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'button-group-basic-demo',
  templateUrl: './button-group-basic.component.html',
  styleUrls: ['./button-group-basic.component.scss'],
})
export class ButtonGroupBasic {
  firstGroupCurrentValue: Array<any> = ['reports'];
  secondGroupCurrentValue: Array<any> = [];

  firstGroupChange(obj: MatButtonToggleChange) {
    this.firstGroupCurrentValue = obj.value;
  }
  secondGroupChange(obj: MatButtonToggleChange) {
    this.secondGroupCurrentValue = obj.value;
  }
}
