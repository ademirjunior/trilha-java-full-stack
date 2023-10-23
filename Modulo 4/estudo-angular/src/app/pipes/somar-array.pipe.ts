import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'somarArray',
  pure: false
})
export class SomarArrayPipe implements PipeTransform {

  transform(array: number[]): number {
    let soma = 0;
    for (let n of array) {
      soma += n;
    }
    return soma;
  }

}
