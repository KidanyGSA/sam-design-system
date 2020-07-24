import { FormlyFieldConfig } from '@ngx-formly/core';

export let formlyFieldConfig: FormlyFieldConfig[] = [
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
    key: 'agencyPicker',
    type: 'agency-picker',
    templateOptions: {
      label: 'Federal Organizations',
      group: 'accordion',
      hideOptional: true,
      selectionType: 'checkbox'
    }
  },

  {
    key: 'typeOfNotice',
    type: 'autocomplete',
    templateOptions: {
      hideOptional: true,
      group: 'accordion',
      label: this.typeOfNoticeService.noticeTypeConfig.labelText,
      service: this.service,
      configuration: this.settings,
      model: this.autocompleteModel
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
          model: this.autocompleteModel
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
          model: this.autocompleteModel
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
      label: this.setAsideNoticeFilterService.setAsideFilterConfig.labelText,
      service: this.service,
      configuration: this.settings,
      model: this.autocompleteModel
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
          model: this.autocompleteModel
        }
      },
      {
        key: 'state',
        type: 'autocomplete',
        templateOptions: {
          hideOptional: true,
          label: this.popStateService.config.labelText,
          service: this.service,
          configuration: this.settings,
          model: this.autocompleteModel
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
          label: this.entityContractorNameService.config.labelText,
          service: this.service,
          configuration: this.settings,
          model: this.autocompleteModel
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
          model: this.autocompleteModel
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
          model: this.autocompleteModel
        }
      },
      {
        key: 'zipCode',
        type: 'autocomplete',
        templateOptions: {
          hideOptional: true,
          label: this.contractAwardeeZipCode.config.labelText,
          service: this.service,
          configuration: this.settings,
          model: this.autocompleteModel
        }
      },
      {
        key: 'state',
        type: 'autocomplete',
        templateOptions: {
          hideOptional: true,
          label: this.awardeeStateService.config.labelText,
          service: this.service,
          configuration: this.settings,
          model: this.autocompleteModel
        }
      }
    ]
  },
  {
    key: 'status',
    type: 'multicheckbox',
    defaultValue: { is_active: true },
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
      label: this.authorityDictionaryService.authorityConfig.labelText,
      service: this.service,
      configuration: this.settings,
      model: this.autocompleteModel
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
          label: this.contractOfficePOC.config.labelText,
          service: this.service,
          configuration: this.settings,
          model: this.autocompleteModel
        }
      },
      {
        key: 'zipCode',
        type: 'autocomplete',
        templateOptions: {
          hideOptional: true,
          label: this.contractOfficeZipCode.config.labelText,
          service: this.service,
          configuration: this.settings,
          model: this.autocompleteModel
        }
      },
      {
        key: 'state',
        type: 'autocomplete',
        templateOptions: {
          hideOptional: true,
          label: this.officeStateService.config.labelText,
          service: this.service,
          configuration: this.settings,
          model: this.autocompleteModel
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
      label: this.initativeFilterService.config.labelText,
      service: this.service,
      configuration: this.settings,
      model: this.autocompleteModel
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
          label: this.entityContractorNameService.config.labelText,
          service: this.service,
          configuration: this.settings,
          model: this.autocompleteModel
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
          model: this.autocompleteModel
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
          model: this.autocompleteModel
        }
      },
      {
        key: 'zipCode',
        type: 'autocomplete',
        templateOptions: {
          hideOptional: true,
          label: this.contractAwardeeZipCode.config.labelText,
          service: this.service,
          configuration: this.settings,
          model: this.autocompleteModel
        }
      },
      {
        key: 'state',
        type: 'autocomplete',
        templateOptions: {
          hideOptional: true,
          label: this.awardeeStateService.config.labelText,
          service: this.service,
          configuration: this.settings,
          model: this.autocompleteModel
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
        hide: true,
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
            hideExpression: `model.select !=  'customDate'`
          },
          {
            key: 'to',
            type: 'datepicker',
            templateOptions: { hideOptional: true, label: 'To' },
            hideExpression: `model.select !=  'customDate'`
          }
        ]
      }
    ]
  }
];
