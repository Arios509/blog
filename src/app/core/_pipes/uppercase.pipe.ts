import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === 1) {
      return '<span class="success">Success</span>'
    } else {
      return '<span class="fail">failed</span>'
    }
  }

}
