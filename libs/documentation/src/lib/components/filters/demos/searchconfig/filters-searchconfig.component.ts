import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import {
  SDSAutocompletelConfiguration,
  SDSSelectedItemModel,
  SelectionMode
} from '@gsa-sam/components';
import { AutocompleteSampleDataService } from './services/autocomplete-sample.service';

@Component({
  templateUrl: './filters-searchconfig.component.html',
  providers: [AutocompleteSampleDataService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersSearchconfig {
  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  public filterChange$ = new BehaviorSubject<object>(null);

  public settings = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();
  public autocompleteModel1 = new SDSSelectedItemModel();
  public autocompleteModel2 = new SDSSelectedItemModel();
  public autocompleteModel3 = new SDSSelectedItemModel();
  public autocompleteModel4 = new SDSSelectedItemModel();
  public autocompleteModel5 = new SDSSelectedItemModel();
  public autocompleteModel6 = new SDSSelectedItemModel();
  public autocompleteModel7 = new SDSSelectedItemModel();
  public autocompleteModel8 = new SDSSelectedItemModel();
  public autocompleteModel9 = new SDSSelectedItemModel();
  public autocompleteModel10 = new SDSSelectedItemModel();
  public autocompleteModel11 = new SDSSelectedItemModel();
  public autocompleteModel12 = new SDSSelectedItemModel();
  public autocompleteModel13 = new SDSSelectedItemModel();
  public autocompleteModel14 = new SDSSelectedItemModel();
  public autocompleteModel15 = new SDSSelectedItemModel();
  public autocompleteModel16 = new SDSSelectedItemModel();
  public autocompleteModel17 = new SDSSelectedItemModel();
  public autocompleteModel18 = new SDSSelectedItemModel();
  public autocompleteModel19 = new SDSSelectedItemModel();
  public autocompleteModel20 = new SDSSelectedItemModel();
  public autocompleteModel21 = new SDSSelectedItemModel();

  fields: FormlyFieldConfig[] = [
    {
      key: 'keywords',
      type: 'autocomplete',
      templateOptions: {
        label: 'Keywords',
        hideOptional: true,
        service: this.service,
        configuration: this.settings,
        model: this.autocompleteModel
      }
    },
    {
      key: 'typeOfNotice',
      type: 'autocomplete',
      templateOptions: {
        hideOptional: true,
        group: 'accordion',
        label: 'Type Of Notice',
        service: this.service,
        configuration: this.settings,
        model: this.autocompleteModel1
      }
    },
    {
      key: 'serviceClassificationWrapper',
      templateOptions: {
        label: 'NAICS and Product Service Code',
        group: 'accordion'
      },
      fieldGroup: [
        {
          key: 'naics',
          type: 'autocomplete',
          templateOptions: {
            label: 'NAICS',
            hideOptional: true,
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel2
          }
        },
        {
          key: 'psc',
          type: 'autocomplete',
          templateOptions: {
            label: 'Product Service Code',
            hideOptional: true,
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel3
          }
        }
      ]
    },
    {
      key: 'setAside',
      type: 'autocomplete',
      templateOptions: {
        hideOptional: true,
        group: 'accordion',
        label: 'Set A side Notice',
        service: this.service,
        configuration: this.settings,
        model: this.autocompleteModel4
      }
    },
    {
      key: 'placeOfPerformance',
      templateOptions: { label: 'Place of Performance', group: 'accordion' },
      fieldGroup: [
        {
          key: 'zipCode',
          type: 'autocomplete',
          templateOptions: {
            hideOptional: true,
            label: 'Zip code',
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel5
          }
        },
        {
          key: 'state',
          type: 'autocomplete',
          templateOptions: {
            hideOptional: true,
            label: 'Pop State ',
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel6
          }
        }
      ]
    },
    {
      key: 'awardeeDetails',
      templateOptions: { label: 'Contract Awardee', group: 'accordion' },
      fieldGroup: [
        {
          key: 'awardedName',
          type: 'autocomplete',
          templateOptions: {
            hideOptional: true,
            label: 'Entity Contractor Name',
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel7
          }
        },
        {
          key: 'entityDuns',
          type: 'autocomplete',
          templateOptions: {
            tagText: 'DUNS',
            tagClass: 'sds-tag--info-purple',
            label: 'Unique Entity ID',
            hideOptional: true,
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel8
          }
        },
        {
          key: 'entityName',
          type: 'autocomplete',
          templateOptions: {
            label: 'Entity Name',
            hideOptional: true,
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel9
          }
        },
        {
          key: 'zipCode',
          type: 'autocomplete',
          templateOptions: {
            hideOptional: true,
            label: 'Contract Awardee ZipCode',
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel10
          }
        },
        {
          key: 'state',
          type: 'autocomplete',
          templateOptions: {
            hideOptional: true,
            label: 'Awardee State',
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel11
          }
        }
      ]
    },
    {
      key: 'status',
      type: 'multicheckbox',
      // defaultValue: { is_active: true },
      templateOptions: {
        label: 'Status',
        group: 'accordion',
        className: 'sds-accordion__title',
        options: [
          {
            label: 'Active',
            value: 'is_active'
          },
          {
            label: 'Inactive',
            value: 'is_inactive'
          }
        ]
      }
    },
    {
      key: 'authority',
      type: 'autocomplete',
      hide: true,
      templateOptions: {
        hideOptional: true,
        group: 'accordion',
        label: 'Authority Dictionary',
        service: this.service,
        configuration: this.settings,
        model: this.autocompleteModel12
      }
    },

    {
      key: 'contractOfficeDetails',
      hide: true,
      templateOptions: { label: 'Contract Office Details', group: 'accordion' },
      fieldGroup: [
        {
          key: 'pointOfContact',
          type: 'autocomplete',
          templateOptions: {
            hideOptional: true,
            label: 'Contract Office POC',
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel13
          }
        },
        {
          key: 'zipCode',
          type: 'autocomplete',
          templateOptions: {
            hideOptional: true,
            label: 'Contract Office ZipCode',
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel14
          }
        },
        {
          key: 'state',
          type: 'autocomplete',
          templateOptions: {
            hideOptional: true,
            label: 'Office State',
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel15
          }
        }
      ]
    },
    {
      key: 'initiative',
      type: 'autocomplete',
      hide: true,
      templateOptions: {
        hideOptional: true,
        group: 'accordion',
        label: 'Initative',
        service: this.service,
        configuration: this.settings,
        model: this.autocompleteModel16
      }
    },

    {
      key: 'awardeeDetails',
      templateOptions: { label: 'Contract Awardee', group: 'accordion' },
      fieldGroup: [
        {
          key: 'awardedName',
          type: 'autocomplete',
          templateOptions: {
            hideOptional: true,
            label: 'Entity Contractor Name',
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel17
          }
        },
        {
          key: 'entityDuns',
          type: 'autocomplete',
          templateOptions: {
            tagText: 'DUNS',
            tagClass: 'sds-tag--info-purple',
            label: 'Unique Entity ID',
            hideOptional: true,
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel18
          }
        },
        {
          key: 'entityName',
          type: 'autocomplete',
          templateOptions: {
            label: 'Entity Name',
            hideOptional: true,
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel19
          }
        },
        {
          key: 'zipCode',
          type: 'autocomplete',
          templateOptions: {
            hideOptional: true,
            label: 'Contract Awardee ZipCode',
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel20
          }
        },
        {
          key: 'state',
          type: 'autocomplete',
          templateOptions: {
            hideOptional: true,
            label: 'Awardee State',
            service: this.service,
            configuration: this.settings,
            model: this.autocompleteModel21
          }
        }
      ]
    },

    {
      key: 'dates',
      templateOptions: { label: 'Dates', group: 'accordion' },
      fieldGroup: [
        {
          key: 'publisheddate',
          //  hide: true,
          // group: 'panel',
          templateOptions: { label: 'published date' },
          fieldGroup: [
            {
              key: 'select',
              type: 'select',
              templateOptions: {
                hideOptional: true,
                label: 'published date',
                placeholder: 'anytime',
                options: [
                  {
                    label: 'Past day',
                    value: 'past24'
                  },
                  {
                    label: 'Past 2 days',
                    value: 'past2days'
                  },
                  {
                    label: 'Past 3 days',
                    value: 'past3days'
                  },
                  {
                    label: 'Past week',
                    value: 'pastWeek'
                  },
                  {
                    label: 'Past month',
                    value: 'pastMonth'
                  },
                  {
                    label: 'Past 3 months',
                    value: 'past3Months'
                  },
                  {
                    label: 'Past year',
                    value: 'pastYear'
                  },
                  {
                    label: 'Custom date',
                    value: 'customDate'
                  }
                ]
              }
            },
            {
              key: 'from',
              type: 'datepicker',
              templateOptions: { hideOptional: true, label: 'From' },
              hideExpression: () => {
                if (
                  this.model &&
                  this.model.dates &&
                  this.model.dates.publisheddate &&
                  this.model.dates.publisheddate.select
                ) {
                  return this.model.dates.publisheddate.select != 'customDate';
                }
                return true;
              }
            },
            {
              key: 'to',
              type: 'datepicker',
              templateOptions: { hideOptional: true, label: 'To' },
              hideExpression: () => {
                if (
                  this.model &&
                  this.model.dates &&
                  this.model.dates.publisheddate &&
                  this.model.dates.publisheddate.select
                ) {
                  return this.model.dates.publisheddate.select != 'customDate';
                }
                return true;
              }
            }
          ]
        }
      ]
    }
  ];

  constructor(public service: AutocompleteSampleDataService) {
    this.setup();
  }

  setup() {
    this.settings.id = 'autocomplete1';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'Enter text';
    this.settings.isFreeTextEnabled = true;
  }
}
