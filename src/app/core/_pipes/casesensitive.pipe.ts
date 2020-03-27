import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'casesensitive'
})
export class CasesensitivePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
