import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  //file name is represented here(Can call it anything you want)
  //this is bool-display and this is what gets refferenced in html
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {
        //frist value   return value
  transform(aBoolean: boolean, locale: string = "en"): string{
    if (locale == "fr"){
      return aBoolean ? "Oui" : "Non";
    }
    //if aBoolean is true return yes, if false return no
    return aBoolean ? "YES" : "NO";
  }

}
