 import {AbstractControl, ValidatorFn} from '@angular/forms';

//function which returns a validator function.
export function ForbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any}|null=>{

   const forbidden= forbiddenName.test(control.value);
   return forbidden ? {'forbiddenName': {value: control.value}}: null;
  };
}
