import { AbstractControl } from "@angular/forms";

 //fucntion that accepts control as a parameter and returns a object(with key of string type and value boolean) or null based on the validation pass or fail.

 export function PasswordValidator(control: AbstractControl):{[key: string]: boolean} | null{

    const password= control.get('password');
    const confirmPassword= control.get('confirmPassword');
    if(password.pristine || confirmPassword.pristine){
      return null;
    }
    return password && confirmPassword && (password.value!==confirmPassword.value)?{'misMatch': true}:
    null;
 }

export function PasswordLengthValidator(control: AbstractControl){
  //returns an object if there is error.
  //if validation is success returns null.
  if(control && (control.value !== null || control.value!==undefined)){
    const password= control.value;
    if(password.length<6){
      return{
        isError: true
      };
    }

  }
  return null;
}