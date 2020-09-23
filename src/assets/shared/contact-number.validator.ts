import {AbstractControl} from "@angular/forms";

//every form control is a type of abstract control
export function ContactNumberValidator(control: AbstractControl){
  //returns an object if there is error.
  //if validation is success returns null.

  if(control && (control.value !== null || control.value!==undefined)){
    const regex = new RegExp('^[7-9][0-9]{9}$');

    if(!regex.test(control.value)){
      return{
        blablabla: true
      };
    }
  }
  return null;
}


// export function ContactNumberValidator(control: AbstractControl):{[key: string]: boolean} | null{
//   //returns an object if there is error.
//   //if validation is success returns null.

//     const regex = new RegExp("[6-9]{1}[0-9]{9}");

//     if(!regex.test(control.value)){
//       return{
//         isError: true
//       };
//     }
// }