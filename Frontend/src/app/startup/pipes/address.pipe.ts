import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: any): any {
    if(value) {
      return 'Yes';
    } else {
      return 'No';
    }
  }

}
