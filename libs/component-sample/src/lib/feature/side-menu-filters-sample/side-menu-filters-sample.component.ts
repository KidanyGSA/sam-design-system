import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components'
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-side-menu-filters-sample',
  templateUrl: 'side-menu-filters-sample.component.html'
})

export class SideMenuFiltersSampleComponent  {

  results: any;
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
 
    {
      key: 'filters',
      wrappers: ['panel'],
      templateOptions: { label: 'Entity Name/UEI' },
      fieldGroup:[{
         key: 'firstName',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'First Name',
          },
        
      }]
    },

    {
      key: 'testings',
      wrappers: ['panel'],
      templateOptions: { label: 'Service Classifications' },
      fieldGroup: [ 
        {
        key: 'text',
        type: 'input',
        templateOptions: {
          label: 'Formly input type text',
          placeholder: 'placeholder',
          inputType: 'text',
  
          required: true,
          inputStyle: 'success'
        },
      },
      {
        key: 'number',
        type: 'input',
        templateOptions: {
          required: true,
          label: 'Formly input type number',
          placeholder: 'placeholder',
          min: 13,
          max: 40,
          inputType: 'number',
          inputStyle: 'error',
          errorMessage: 'Helpful error message'
        },
      },
      {
        key: 'drop-down',
        type: 'select',
        templateOptions: {
          label: 'Formly select type',
          placeholder: 'Select',
          multiple: false,  // can be true or false to select multiple options or single
          options: [
            { label: 'Shilpa', value: 'ys', group: 'Female' },
            { label: 'Christy', value: 'ch', group: 'Female' },
            { label: 'Carlos', value: 'cv', group: 'Male' },
            { label: 'Rinu', value: 'rn', group: 'Male' },
            { label: 'Thomas', value: 'tt', group: 'Male' },
            { label: 'Sam', value: 'sam', group: 'Female' },
            { label: 'David', value: 'dr', group: 'Male' },
          ],
        },
      },
      {
        key: 'text',
        type: 'textarea',
        templateOptions: {
          label: 'Formly input type textarea',
          placeholder: 'placeholder',
          required: true,
        },
      },
      {
        key: 'radio',
        type: 'radio',
        templateOptions: {
          label: 'Formly Radio button type',
          options: [
            { label: 'Option A', value: 'a' },
            { label: 'Option B', value: 'b' },
            { label: 'Option C', value: 'c' },
            { label: 'Option C', value: 'd' },
          ],
        },
      },
      {
        key: 'checkbox',
        type: 'checkbox',
        templateOptions: {
          label: 'Formly Checkbox',
          option: { label: 'Option A', value: 'a' },
        },
      },
      {
        key: 'multi-checkbox',
        type: 'multicheckbox',
        templateOptions: {
          label: 'Formly multi Select checkbox',
          options: [
            {
              key: 'sports',
              value: 'Sports'
            },
            {
              key: 'movies',
              value: 'Movies'
            },
            {
              key: 'others',
              value: 'Others'
            }
          ]
        },
      }
        ],
    },
  ];

  // To display the selected model values
  submit(model) {
    this.results = model;
  }



  // public linkEvent = new BehaviorSubject<object>(null);

  // ngOnInit() {

  //   this.linkEvent.subscribe(
  //     value => {
  //       console.log('Link Event Clicked Change');
  //       console.log(value);
  //     }
  //   );
  // }


  // @ViewChild('sideNav') sideNav;
  // constructor(private change: ChangeDetectorRef) { }
  // model: SideNavigationModel = {
  //   navigationLinks: [{
  //     text: 'Parent 1', id: 'linkp1', route: '/', mode: NavigationMode.INTERNAL, children: [
  //       { text: 'Child 1 of Parent 1', route: '/', id: 'linkc1p1', mode: NavigationMode.INTERNAL },
  //       {
  //         text: 'Child 2 of Parent 1', route: '/', id: 'linkc2p1', mode: NavigationMode.INTERNAL, children: [
  //           { text: 'Grandchild 1 of Child 2 of Parent 1', route: '/', id: 'linkgc1c2p1', mode: NavigationMode.INTERNAL }]
  //       },
  //       { text: 'Child 3 of Parent 1', route: '/', id: 'linkc3p1', mode: NavigationMode.INTERNAL },
  //       {
  //         text: 'Child 4 of Parent 1', route: '/', id: 'linkc4p1', mode: NavigationMode.INTERNAL
  //         , children: [
  //           { text: 'Grandchild 1 of Child 4 of Parent 1', route: '/', id: 'linkgc1c4p1', mode: NavigationMode.INTERNAL },
  //           {
  //             text: 'Grandchild 2 of Child 4 of Parent 1', route: '/', id: 'linkgc2c4p1', mode: NavigationMode.INTERNAL,
  //             children: [
  //               { text: ' Great 1 of Grandchild 2 of Child 4 of Parent 1', route: '/', id: 'linkg1gc1c4p1', mode: NavigationMode.INTERNAL },
  //               {
  //                 text: 'Great 2 of Grandchild 2 of Child 4 of Parent 1', route: '/', id: 'linkg2gc1c4p1', mode: NavigationMode.INTERNAL
  //                 //, children: [{ text: 'Great 1 of  Great 1 of Grandchild 2 of Child 4 of Parent 1', route: '/', id: 'linkg1gc1c4p1' }]
  //               },
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     text: 'Parent 2', id: 'linkp2', route: '/', mode: NavigationMode.INTERNAL, children: [
  //       {
  //         text: 'Child 1 of Parent 2', route: '/', id: 'linkc1p2', mode: NavigationMode.INTERNAL, children: [

  //           { text: 'Grandchild 1 Child 1 of Parent 2', route: '/', id: 'linkgc1c1p2', mode: NavigationMode.INTERNAL },
  //         ]
  //       },
  //       { text: 'Child 2 of Parent 2', route: '/', id: 'linkc2p2', mode: NavigationMode.INTERNAL },
  //       { text: 'Child 3 of Parent 2', route: '/', id: 'linkc3p2', mode: NavigationMode.INTERNAL },
  //       { text: 'Child 4 of Parent 2', route: '/', id: 'linkc4p2', mode: NavigationMode.INTERNAL }
  //     ]
  //   }
  //   ]
  // };
  // onSelectChange() {
  //   this.sideNav.select(this.selectedId);
  // }
  // selectedId: string = 'linkp1';

  // options: any[] = [];


  // ngAfterViewInit(): void {
  //   for (let i = 0; i < this.model.navigationLinks.length; i++) {
  //     this.addToOptions(this.model.navigationLinks[i]);
  //   }
  //   this.sideNav.select(this.selectedId);
  //   this.change.detectChanges();
  // }

  // addToOptions(item: any) {
  //   this.options.push(item);
  //   if (item.children) {
  //     for (let i = 0; i < item.children.length; i++) {
  //       this.addToOptions(item.children[i]);
  //     }
  //   }
  // }
}