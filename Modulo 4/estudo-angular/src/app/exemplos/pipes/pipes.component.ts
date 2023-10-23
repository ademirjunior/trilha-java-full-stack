import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  hoje: Date = new Date();
  valor: number = 0.75456;
  mensagem: string = 'Olá, tudo bem?';
  salario: number = 1500.5555;

  valores: number[]  = [1,2,3];
  numeroDigitado: string = '';

  inserir(){
    if (this.numeroDigitado){
      this.valores.push(Number(this.numeroDigitado));
    }
    console.log(this.valores);
  }
}
