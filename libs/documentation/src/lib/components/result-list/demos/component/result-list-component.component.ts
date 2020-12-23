import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: `result-list-component-demo`,
  templateUrl: './result-list-component.component.html',
})

export class ResultListComponent {

  constructor(private change: ChangeDetectorRef) { }

  itemsDefault = [
    { title: 'First', id: 1 },
    { title: 'Second', id: 2 },
    { title: 'Third', id: 3 },
    { title: 'Fourth', id: 4 },
    { title: 'Fifth', id: 5 , hasNewerData:true}
  ];

  items = this.itemsDefault;

}
