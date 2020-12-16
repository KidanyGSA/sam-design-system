import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AutocompleteSampleDataService } from '../../../../autocomplete/demos/basic/service/autocomplete-sample.service';

@Component({
  selector: 'gsa-sam-readonly-advanced',
  templateUrl: './readonly-advanced.component.html',
  styleUrls: ['./readonly-advanced.component.scss'],
  providers: [ AutocompleteSampleDataService]
})
export class ReadonlyAdvancedComponent implements OnInit {

  public settings = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();

  constructor(
    private service: AutocompleteSampleDataService,
  ) { }

  form = new FormGroup({});
  model: any = {};
  options: any = null;
  isReadonlyMode = false;
  fields: FormlyFieldConfig[] = [
    {
      className: 'grid-col-12',
      template: '<h3>Personal Information</h3><span>Please enter information about yourself in the following section</span>',
    },
    {
      fieldGroupClassName: 'grid-row grid-gap-2',
      fieldGroup: [
        {
          className: 'grid-col-5',
          key: 'firstName',
          type: 'input',
          defaultValue: 'Jane',
          templateOptions: {
            label: 'First Name',
            required: true,
            readonlyMode: true,
          },
        },
        {
          className: 'grid-col-5',
          defaultValue: 'Doe',
          key: 'lastName',
          type: 'input',
          templateOptions: {
            label: 'Last Name',
            required: true,
          }
        },
      ]
    },
    {
      fieldGroupClassName: 'grid-row',
      fieldGroup: [
        {
          className: 'grid-col-12',
          key: 'email',
          type: 'input',
          defaultValue: 'janedoe@mail.com',
          templateOptions: {
            label: 'Email Address',
            description: 'Please Enter your email address. A verification email will be sent here upon form completion',
            required: true,
          }
        },
      ]
    },
    {
      fieldGroupClassName: 'grid-row grid-gap-3',
      fieldGroup: [
        {
          className: 'grid-col-8',
          key: 'dateOfBirth',
          type: 'datepicker',
          defaultValue: new Date(),
          templateOptions: {
            required: true,
            label: 'Date of Birth',
          }
        },
        {
          className: 'grid-col-3',
          key: 'gender',
          type: 'radio',
          templateOptions: {
            label: 'Gender',
            hideOptional: true,
            options: [
              {
                key: 'male',
                value: 'Male'
              },
              {
                key: 'female',
                value: 'Female'
              },
              {
                key: 'noResponse',
                value: 'Prefer not to answer'
              }
            ]
          }
        }
      ],
    },
    {
      fieldGroupClassName: 'grid-row grid-gap-2',
      fieldGroup: [
        {
          className: 'grid-col-2',
          type: 'input',
          key: 'Code',
          defaultValue: '123',
          templateOptions: {
            label: 'Country Code',
            type: 'number',
            pattern: '\\d{3}',
            placeholder: 'ex-123',
            hideOptional: true,
          },
        },
        {
          className: 'grid-col-5',
          type: 'input',
          key: 'phone',
          defaultValue: '123456789',
          templateOptions: {
            label: 'Phone',
            required: true,
            type: 'number',
            pattern: '\\d{9}',
            placeholder: 'ex-123456789',
          },
        },
        {
          className: 'grid-col-2',
          type: 'input',
          key: 'extension',
          defaultValue: '123',
          templateOptions: {
            label: 'Extension',
            type: 'number',
            pattern: '\\d{3}',
            placeholder: 'ex-123',
            hideOptional: true,
          },
        },
      ]
    },
    {
      className: 'margin-top-(-1) grid-col-8 display-block desktop:display-none',
      type: 'input',
      key: 'extension1',
      hideExpression: (model) => !this.model.showExtension,
      templateOptions: {
        label: 'Extension',
        type: 'number',
        max: 99999,
        min: 0,
        pattern: '\\d{3}',
        placeholder: 'ex-123'
      },
    },
    {
      fieldGroupClassName: 'grid-row margin-top-5',
      fieldGroup: [
        {
          template: '<h3>Physical Address</h3><span>Your physical address is the street address of the primary office or other building where your entity is located. A post office box may not be used as your physical…</span>',
        },
      ]
    },
    {
      fieldGroupClassName: 'grid-row',
      fieldGroup: [
        {
          className: 'desktop:grid-col-12 tablet:grid-col-12',
          type: 'input',
          defaultValue: '1234 main street',
          key: 'street1',
          templateOptions: {
            required: true,
            label: 'Street Address',
          },
        },
      ]
    },
    {
      fieldGroupClassName: 'grid-row grid-gap-2',
      fieldGroup: [
        {
          className: 'grid-col-7',
          type: 'input',
          defaultValue: 'Reston',
          key: 'cityName',
          templateOptions: {
            required: true,
            label: 'City',
          },
        },
        {
          className: 'grid-col-4',
          key: 'state',
          type: 'select',
          defaultValue: 'None',
          hideExpression: (model) => this.model.country === 'canada',
          templateOptions: {
            label: 'State',
            required: true,
            options: [
              { id: '0', label: '--Select--', value: 'Select' },
              { id: '1', label: 'Alabama', value: 'Alabama' },
              { id: '2', label: 'Alaska', value: 'Alaska' },
              { id: '3', label: 'Arizona', value: 'Arizona' },
              { id: '4', label: 'Arkansas', value: 'Arkansas' },
              { id: '5', label: 'California', value: 'California' },
              { id: '6', label: 'Colorado', value: 'Colorado' },
              { id: '7', label: 'Connecticut', value: 'Connecticut' },
              { id: '8', label: 'Delaware', value: 'Delaware' },
              { id: '9', label: 'District of Columbia', value: 'District of Columbie' },
              { id: '10', label: 'Florida', value: 'Florida' },
              { id: '11', label: 'Georgia', value: 'Georgia' },
              { id: '12', label: 'Hawaii', value: 'Hawaii' },
              { id: '13', label: 'Idaho', value: 'Idaho' },
              { id: '14', label: 'Illinois', value: 'Illinois' },
              { id: '15', label: 'Indiana', value: 'Indiana' },
              { id: '16', label: 'Iowa', value: 'Iowa' },
              { id: '17', label: 'Kansas', value: 'Kansas' },
              { id: '18', label: 'Kentucky', value: 'Kentucky' },
              { id: '19', label: 'Louisiana', value: 'Louisiana' },
              { id: '20', label: 'Maine', value: 'Maine' },
              { id: '21', label: 'Maryland', value: 'Maryland' },
              { id: '22', label: 'Massachusetts', value: 'Massachusetts' },
              { id: '23', label: 'Michigan', value: 'Michigan' },
              { id: '24', label: 'Minnesota', value: 'Minnesota' },
              { id: '25', label: 'Mississippi', value: 'Mississippi' },
              { id: '26', label: 'Missouri', value: 'Missouri' },
              { id: '27', label: 'Montana', value: 'Montana' },
              { id: '28', label: 'Nebraska', value: 'Nebraska' },
              { id: '29', label: 'Nevada', value: 'Nevada' },
              { id: '30', label: 'New Hampshire', value: 'New Hampshire' },
              { id: '31', label: 'New Jersey', value: 'New Jersey' },
              { id: '32', label: 'New Mexico', value: 'New Mexico' },
              { id: '33', label: 'New York', value: 'New York' },
              { id: '34', label: 'North Carolina', value: 'North Carolina' },
              { id: '35', label: 'North Dakota', value: 'North Dakota' },
              { id: '36', label: 'Ohio', value: 'Ohio' },
              { id: '37', label: 'Oklahoma', value: 'Oklahoma' },
              { id: '38', label: 'Oregon', value: 'Oregon' },
              { id: '39', label: 'Pennsylvania', value: 'Pennsylvania' },
              { id: '40', label: 'Rhode Island', value: 'Rhode Island' },
              { id: '41', label: 'South Carolina', value: 'South Carolina' },
              { id: '42', label: 'South Dakota', value: 'South Dakota' },
              { id: '43', label: 'Tennessee', value: 'Tennessee' },
              { id: '44', label: 'Texas', value: 'Texas' },
              { id: '45', label: 'Utah', value: 'Utah' },
              { id: '46', label: 'Vermont', value: 'Vermont' },
              { id: '47', label: 'Virginia', value: 'Virginia' },
              { id: '48', label: 'Washington', value: 'Washington' },
              { id: '49', label: 'West Virginia', value: 'West Virginia' },
              { id: '50', label: 'Wisconsin', value: 'Wisconsin' },
              { id: '51', label: 'Wyoming', value: 'Wyoming' },
            ],
          },
        },
        {
          className: 'grid-col-4',
          type: 'select',
          key: 'province',
          hideExpression: (model) => this.model.country === 'united_states',
          templateOptions: {
            label: 'State/Province',
            required: true,
            options: [
              { id: '1', label: 'Alberta', value: 'Alberta' },
              { id: '2', label: 'British Columbia', value: 'British Columbia' },
              { id: '3', label: 'Manitoba', value: 'Manitoba' },
              { id: '4', label: 'New Brunswick', value: 'New Brunswick' },
              { id: '5', label: 'Newfoundland and Labrador', value: 'Newfoundland and Labrador' },
              { id: '6', label: 'Nova Scotia', value: 'Nova Scotia' },
              { id: '7', label: 'Ontario', value: 'Ontario' },
              { id: '8', label: 'Prince Edward Island', value: 'Prince Edward Island' },
              { id: '9', label: 'Quebec', value: 'Quebec' },
              { id: '10', label: 'Saskatchewan', value: 'Saskatchewan' },
            ]
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'grid-row grid-gap-2',
      fieldGroup: [
        {
          className: 'grid-col-7',
          key: 'country',
          type: 'select',
          defaultValue: 'united_states',
          templateOptions: {
            label: 'Country',
            required: true,
            options: [
              { label: 'United States (USA)', value: 'united_states' },
              { label: 'Canada', value: 'canada' },
            ],
          },
        },
        {
          className: 'grid-col-4',
          type: 'input',
          key: 'zip',
          defaultValue: '12345',
          hideExpression: (model) => this.model.country === 'canada',
          templateOptions: {
            required: true,
            type: 'number',
            label: 'ZIP Code (+ 4)',
            maxLength: 5,
            min: 0,
            pattern: '\\d{5}',
          },
        },
        {
          fieldGroupClassName: 'grid-row',
          fieldGroup: [
            {
              className: 'grid-col-4',
              type: 'input',
              key: 'postal',
              hideExpression: (model) => this.model.country === 'united_states',
              templateOptions: {
                required: true,
                label: 'Postal Code',
                maxLength: 6,
                min: 0,
                pattern: '\\d{5}',
              },
            },
          ]
        },
      ]
    },
    {
      key: 'multiselect',
      type: 'autocomplete',
      templateOptions: {
        label: 'Multi-select Readonly Demo',
        service: this.service,
        configuration: this.settings,
        model: this.autocompleteModel,
      }
    },
    {
      fieldGroupClassName: 'grid-row margin-top-5',
      templateOptions: {
        label: 'Terms and Conditions',
        group: 'accordion',
      },
      fieldGroup: [
        {
          className: 'grid-col-12',
          template: `
          <p class="sds-small text-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
          `,
          hideExpression: () => this.isReadonlyMode,        
        },
        {
          type: 'checkbox',
          key: 'terms',
          templateOptions: {
            label: 'I agree',
            description: 'By checking the box below you agree to the terms and conditions of the site.',
            required: true,
          }
        }
      ]
    },
  ]

  ngOnInit() {
    this.settings.id = 'autocomplete1';
    this.settings.primaryKeyField = 'id';
    this.settings.primaryTextField = 'name';
    this.settings.secondaryTextField = 'subtext';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'Enter text';
    this.settings.isFreeTextEnabled = true;
  }

  toggleReadonly() {
    this.fields.forEach(field => {
      this._toggleReadonly(field);
    });
    this.isReadonlyMode = !this.isReadonlyMode;
  }

  private _toggleReadonly(field: FormlyFieldConfig) {

    if (field.fieldGroup) {
      field.fieldGroup.forEach(field => {
        this._toggleReadonly(field);
      })
    }

    if (field.templateOptions) {
      field.templateOptions.readonlyMode = !field.templateOptions.readonlyMode;
    }
  }
}
