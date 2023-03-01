import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refPipe'
})
export class RefPipePipe implements PipeTransform {
  transform(value: number): string {
    let reffed : string = 'ref-' + value
    return reffed;
  }

}
