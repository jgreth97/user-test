import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordD'
})
export class PasswordDisplayPipe implements PipeTransform {

  transform(aPassword: string): string {
    let len = aPassword.length;
    let psw = "";
    for(let idx = 0; idx < len; idx++){
      psw += "#";
    }
    return psw;
  }

}
