import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SearchMessageInfoSampleData, SearchMessageNoMatchFound } from './result-list-info-message.data';

@Component({
  selector: 'search-result-list-sample',
  templateUrl: 'search-result-list-sample.component.html',
})

export class SearchResultListSampleComponent {

  constructor(private change: ChangeDetectorRef) { }

  public messageInfoData=SearchMessageInfoSampleData;
  // public messageInfoError=SearchMessageErrorSampleData;
  public messageInfoNoMatchFound=SearchMessageNoMatchFound;


  items = [
    { text: 'First', id: 1 },
    { text: 'Second', id: 2 },
    { text: 'Third', id: 3 },
    { text: 'Fourth', id: 4 },
    { text: 'Fifth', id: 5 , hasNewerData:true},
  ];

  errorItems = [
     {
      error: true,
      title: 'Error message title',
      message:"Error message",
      iconObject: {
        'iconlib': 'sds',
        'icon': 'bell',
        'iconsize': '5x'
      }
    }
  ];

  emptyItems = [];

}
