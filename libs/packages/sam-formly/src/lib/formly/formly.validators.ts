import { FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';


/**
 *
 * @param control
 * @param field
 */
export function minDateValidator(control: FormControl, field: FormlyFieldConfig): ValidationErrors {
    let toReturn = null;
    let minDateField = field.templateOptions.minDate;
    let value = control.value;
    if (value && minDateField) {
        if (value instanceof Date && minDateField instanceof Date) {
            if (value < minDateField) {
                if (!field.templateOptions.maxDate && !(field.templateOptions.maxDate instanceof Date)) {
                    toReturn = {
                        'minDate': true
                    };
                } else {
                    toReturn = {
                        'betweenDate': true
                    };
                }
            }
        }
    }

    return toReturn;
}

/**
 * Usage:
 *  Override the required validator to allow autocompletes to behave more like
 *  the other inputs regarding error messages
 *
 // In the formly config
 {
      type: 'autocomplete',
      templateOptions: {
        required: true,
      },
      validators: {
        required: autocompleteRequired
      },
 */
export function autocompleteRequired(control: FormControl): ValidationErrors {
    return control.value && control.value.items && control.value.length ? { required: true } : null;
}

export function autocompleteMaxLengthValidator(control: FormControl, field: FormlyFieldConfig): ValidationErrors {
    let maxLengthValue = field.templateOptions.maxLength;
    let value = control.value;
    if (value && maxLengthValue) {
        return value[0].name.length > maxLengthValue ? { maxlength: true } : null;
    }
}

export function autocompleteMinLengthValidator(control: FormControl, field: FormlyFieldConfig): ValidationErrors {
    let minLengthValue = field.templateOptions.minLength;
    let value = control.value;
    if (value && minLengthValue) {
        console.log(value[0].name.length);
        console.log(minLengthValue);
        let toReturn = (value[0].name.length < minLengthValue) ? { minlength: true } : null;
        console.log(toReturn);
        return toReturn
    }
}

export function autocompleteMinValidator(control: FormControl, field: FormlyFieldConfig): ValidationErrors {
    let minValue = field.templateOptions.min;
    let value = control.value;
    if (value && minValue && !isNaN(value[0].name)) {
        return value[0].name < minValue ? { min: true } : null;
    }
}

export function autocompleteMaxValidator(control: FormControl, field: FormlyFieldConfig): ValidationErrors {
    let maxValue = field.templateOptions.max;
    let value = control.value;
    if (value && maxValue && !isNaN(value[0].name)) {
        return value[0].name > maxValue ? { max: true } : null;
    }
}

export function autocompleteAgeValidator(control: FormControl, field: FormlyFieldConfig): ValidationErrors {
    let minAgeValue = field.templateOptions.minAge;
    let maxAgeValue = field.templateOptions.maxAge;
    let value = control.value;
    if (value && minAgeValue && maxAgeValue) {
        return (value[0].name < minAgeValue || value[0].name > maxAgeValue) ? { age: true } : null;
    }
}
/**
 *
 * @param control
 * @param field
 */
export function maxDateValidator(control: FormControl, field: FormlyFieldConfig): ValidationErrors {
    let toReturn = null;
    let maxDateField = field.templateOptions.maxDate;
    let value = control.value;
    if (value && maxDateField) {
        if (value instanceof Date && maxDateField instanceof Date) {
            if (value > maxDateField) {
                if (!field.templateOptions.minDate && !(field.templateOptions.minDate instanceof Date)) {
                    toReturn = {
                        'maxDate': true
                    };
                } else {
                    toReturn = {
                        'betweenDate': true
                    };
                }
            }
        }
    }
    return toReturn;
}