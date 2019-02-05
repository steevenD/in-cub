import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberCofounder'
})
export class NumberCofounderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
