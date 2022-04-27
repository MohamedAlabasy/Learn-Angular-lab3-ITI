import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConvert'
})
export class StringConvertPipe implements PipeTransform {

  transform(myString: string): string {
    return myString.replace(/-/g, " ");
  }

}
