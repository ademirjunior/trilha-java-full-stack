import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarEmail'
})
export class OcultarEmailPipe implements PipeTransform {

  transform(value: string): string {
    return this.ocultarEmail(value);
  }

  ocultarEmail(email: string): string {
    const [username, domain] = email.split('@');
    const initial = username[0];
    const asteriscos = '*'.repeat(username.length - 1);
    return `${initial}${asteriscos}@${domain}`;
  }
}
