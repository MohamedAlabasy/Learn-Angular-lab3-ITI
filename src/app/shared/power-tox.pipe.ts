import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerTox'
})
export class PowerToxPipe implements PipeTransform {

  transform(number: string, power: string): number {
    return Math.pow(+number, +power);
  }

}
