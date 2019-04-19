import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberCofounder'
})
export class NumberCofounderPipe implements PipeTransform {

  transform(value: any): any {
    if (value === 1) {
      return 'Unique';
    } else if (value === 2) {
      return 'Couple';
    } else if (value > 2 ) {
      return 'Group';
    } else {
      return '';
    }
  }
}
