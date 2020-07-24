import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersSearchconfig } from './filters-searchconfig.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsFiltersModule } from '@sam-design-system/sam-formly';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsAccordionModule } from '@gsa-sam/components';

@NgModule({
  declarations: [FiltersSearchconfig],
  imports: [
    CommonModule,
    FormsModule,
    SdsAccordionModule,
    SdsFiltersModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [FiltersSearchconfig],
  bootstrap: [FiltersSearchconfig]
})
export class FiltersSearchconfigModule {}
