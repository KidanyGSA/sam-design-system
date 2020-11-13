import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SdsDialogService } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { SdsAdvancedFiltersService } from './sds-advanced-filters.service';
import { SdsFormlyDialogData } from '../../formly-dialog/formly-dialog-data.model';
import { SdsFormlyDialogComponent } from '../../formly-dialog/formly-dialog.component';

@Component({
  selector: 'sds-advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.scss'],
})
export class AdvancedFiltersComponent {
  /**
   * Pass in a Form Group for ReactiveForms Support
   */
  @Input() public form: FormGroup;

  /**
   *  Fields are used to configure the UI components
   */
  @Input() public fields: FormlyFieldConfig[];

  /**
   *  Model used to display the filter values.
   */
  @Input() public model: any;

  /**
   *    Options for the form.
   */
  @Input() public options: FormlyFormOptions = {};

  selectAll = false;
  constructor(
    public dialog: SdsDialogService,
    private advancedFiltersService: SdsAdvancedFiltersService
  ) {}

  onSelectAllChange(ev) {
    this.selectAll = !this.selectAll;
    this.fields.forEach((field: any) => {
      if (field.type === 'checkbox') {
        this.form.get(field.key).setValue(this.selectAll);
      } else {
        if (this.selectAll) {
          let currentField = this.data.fields.find(
            (item) => item.key === field.key
          );
          if (currentField.templateOptions.options instanceof Array) {
            let value = currentField.templateOptions.options.map(
              ({ key }) => key
            );
            this.form.get(field.key).setValue(value);
          }
        } else {
          this.form.get(field.key).setValue([]);
        }
      }
    });
  }

  openDialog(): void {
    const modalFields: FormlyFieldConfig[] = this.advancedFiltersService.convertToCheckboxes(
      this.fields
    );

    const filedGroup: FormlyFieldConfig[] = [
      {
        templateOptions: { label: 'test' },
        fieldGroup: [
          {
            key: 'selectAll',
            type: 'checkbox',
            templateOptions: {
              label: 'Select All',
              hideOptional: true,
            },
          },

          {
            template: '<hr/>',
          },
        ],
      },
    ];
    const updateField: FormlyFieldConfig[] = [
      ...filedGroup,
      ...modalFields,
      ...filedGroup,
    ];

    console.log(updateField, 'test fields');
    const data: SdsFormlyDialogData = {
      fields: updateField,
      submit: 'Update',
      title: 'More Filters',
    };

    const dialogRef = this.dialog.open(SdsFormlyDialogComponent, {
      width: 'medium',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const response = this.advancedFiltersService.updateFields(
          result,
          this.fields,
          this.model
        );

        this.fields = response.fields;
        this.model = response.model;
      }
    });
  }
}
