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
    if (value && maxLengthValue && value.length > 0) {
        let lastIndex = value.length - 1;
        return value[lastIndex].name.length > maxLengthValue ? { maxlength: true } : null;
    }
}

export function autocompleteMinLengthValidator(control: FormControl, field: FormlyFieldConfig): ValidationErrors {
    let minLengthValue = field.templateOptions.autoMinLength;
    let value = control.value;
    if (value && minLengthValue && value.length > 0) {
        let lastIndex = value.length - 1;
        let toReturn = (value[lastIndex].name.length < minLengthValue) ? { autoMinLength: true } : null;
        return toReturn
    }
}

export function autocompleteMinValidator(control: FormControl, field: FormlyFieldConfig): ValidationErrors {
    let minValue = field.templateOptions.min;
    let value = control.value;
    if (value && minValue && value.length > 0 && !isNaN(value[0].name)) {
        let lastIndex = value.length - 1;
        return value[lastIndex].name < minValue ? { min: true } : null;
    }
}

export function autocompleteMaxValidator(control: FormControl, field: FormlyFieldConfig): ValidationErrors {
    let maxValue = field.templateOptions.max;
    let value = control.value;
    if (value && maxValue && value.length > 0 && !isNaN(value[0].name)) {
        let lastIndex = value.length - 1;
        return value[lastIndex].name > maxValue ? { max: true } : null;
    }
}

export function autocompleteAgeValidator(control: FormControl, field: FormlyFieldConfig): ValidationErrors {
    let minAgeValue = field.templateOptions.minAge;
    let maxAgeValue = field.templateOptions.maxAge;
    let value = control.value;
    if (value && minAgeValue && maxAgeValue && value.length > 0) {
        let lastIndex = value.length - 1;
        return (value[lastIndex].name < minAgeValue || value[0].name > maxAgeValue) ? { age: true } : null;
    }
}

export function autocompletePatternValidator(control: FormControl, field: FormlyFieldConfig): ValidationErrors {
    let regex = new RegExp(field.templateOptions.autoPattern);
    let value = control.value;
    if (value && regex && value.length > 0) {
        let lastIndex = value.length - 1;
        return !(regex.test(value[lastIndex].name)) ? { autoPattern: true } : null;
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

