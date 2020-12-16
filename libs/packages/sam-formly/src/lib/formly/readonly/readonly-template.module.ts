import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReadonlyInputComponent } from './readonly-input';
import { ReadonlyContainerComponent } from './readonly-container.component';
import { ReadonlyDatepickerComponent } from './readonly-datepicker';
import { ReadonlySelectComponent } from './readonly-select';
import { ReadonlyRadioComponent } from './readonly-radio';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { ReadonlyAutocompleteComponent } from './readonly-autocomplete';
import { ReadonlyCheckboxComponent } from './readonly-checkbox';

@NgModule({
  imports: [
    CommonModule,
    FormlySelectModule,
  ],
  declarations: [
    ReadonlyInputComponent,
    ReadonlyContainerComponent,
    ReadonlyDatepickerComponent,
    ReadonlySelectComponent,
    ReadonlyRadioComponent,
    ReadonlyAutocompleteComponent,
    ReadonlyCheckboxComponent,
  ],
  exports: [
    ReadonlyInputComponent,
    ReadonlyContainerComponent,
    ReadonlyDatepickerComponent,
    ReadonlySelectComponent,
    ReadonlyRadioComponent,
    ReadonlyAutocompleteComponent,
    ReadonlyCheckboxComponent,
  ]
})
export class ReadonlyTemplateModule {}