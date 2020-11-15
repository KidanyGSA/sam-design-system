import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SdsDialogService } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { SdsAdvancedFiltersService } from './sds-advanced-filters.service';
import { SdsFormlyDialogData } from '../../formly-dialog/formly-dialog-data.model';
import { SdsFormlyDialogComponent } from '../../formly-dialog/formly-dialog.component';
import { startWith } from 'rxjs/internal/operators/startWith';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/internal/operators/delay';
import { tap } from 'rxjs/internal/operators/tap';
import { pairwise } from 'rxjs/internal/operators/pairwise';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sds-advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.scss']
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

  onSelectAllChange(selectAllValue, selectedform, isOnload, selectAllField) {
    const modalFields: FormlyFieldConfig[] = this.advancedFiltersService.convertToCheckboxes(
      this.fields
    );
    const keys = Object.keys(selectedform.controls);
    if (!isOnload) {
      this.selectAll = selectAllValue;
      keys.forEach(key => {
        if (key !== 'selectAll') {
          let currentField = modalFields.find(item => item.key === key);
          if (currentField.key === key && currentField.type === 'checkbox') {
            selectedform.get(key).setValue(this.selectAll);
          } else if (currentField.type === 'multicheckbox') {
            const array = [];
            if (this.selectAll) {
              currentField.templateOptions.options.forEach((option: any) => {
                array.push(option.key);
              });
              selectedform.get(key).setValue(array);
              selectedform.markAsTouched();
            } else {
              selectedform.get(key).setValue([]);
            }
          }
        }
      });
    } else {
      keys.forEach(key => {
        if (key !== 'selectAll') {
          const val = selectedform.get(key).value;
          if (val || (Array.isArray(val) && val.length > 0))
            selectedform.get('selectAll').setValue(true);
        }
      });
    }
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
              id: 'moreFilterSelectAll'
            },
            hooks: {
              onInit: field => {
                let isOnload = true;
                const form = field.parent.formControl;
                form
                  .get('selectAll')
                  .valueChanges.pipe(
                    startWith(form.get('selectAll').value),
                    tap(selectAllValue => {
                      this.onSelectAllChange(
                        selectAllValue,
                        form,
                        isOnload,
                        field
                      );
                      isOnload = false;
                    })
                  )
                  .subscribe();
              }
            }
          },
          {
            template: '<hr/>'
          }
        ]
      }
    ];
    const updateField: FormlyFieldConfig[] = [...filedGroup, ...modalFields];
    const data: SdsFormlyDialogData = {
      fields: updateField,
      submit: 'Update',
      title: 'More Filters'
    };

    const dialogRef = this.dialog.open(SdsFormlyDialogComponent, {
      width: 'medium',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
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
