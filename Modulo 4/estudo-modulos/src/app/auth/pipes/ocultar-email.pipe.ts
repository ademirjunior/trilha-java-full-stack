import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarEmail'
})
export class OcultarEmailPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
