import { AbstractControl, ValidatorFn } from "@angular/forms";


export class CustomValidators {

    static lettersOnly(): ValidatorFn {
        let regExp: RegExp = /^[a-zA-Z\s]*$/;

        return (control: AbstractControl): { [key: string]: any } | null => {
            const lettersOnly = regExp.test(control.value);

            return !lettersOnly ? { 'lettersOnly': { value: control.value } } : null;
        };
    }

    static numbersOnly(): ValidatorFn {
        let regExp: RegExp = /^[0-9]*$/;

        return (control: AbstractControl): { [key: string]: any } | null => {
            const numbersOnly = regExp.test(control.value);

            return !numbersOnly ? { 'numbersOnly': { value: control.value } } : null;
        };
    }


}
