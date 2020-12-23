import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'accordion-basic-demo',
  templateUrl: 'accordion-basic.component.html'
})
export class AccordionBasic {

  @ViewChild('sdsAccordionDemo') sdsAccordionDemo;
  @ViewChild('first') firstItem;
  @ViewChild('third') thirdItem;

  multi = false;

  toggle(): void {
    this.firstItem.toggle();
  }

  close(): void {
    this.firstItem.close();
  }

  open(): void {
    this.firstItem.open();
  }

  toggleDisabled(): void {
    this.thirdItem.toggleDisabled();
  }

  openAll(): void {
    this.sdsAccordionDemo.openAll();
  }

  closeAll(): void {
    this.sdsAccordionDemo.closeAll();
  }

  toggleMulti(): void {
    this.sdsAccordionDemo.toggleMulti();
  }

}
