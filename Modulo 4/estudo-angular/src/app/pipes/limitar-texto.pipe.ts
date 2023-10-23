import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitarTexto'
})
export class LimitarTextoPipe implements PipeTransform {

  transform(value: string, limite: number): string {

    return value.slice(0, limite) + '...';
  }

}
