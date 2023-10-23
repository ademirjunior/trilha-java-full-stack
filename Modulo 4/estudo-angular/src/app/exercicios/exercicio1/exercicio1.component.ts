import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component {
  nome: string = '';
  sobrenome: string = '';
  
  getIniciais(): string {
    if (this.nome.length == 0 || this.sobrenome.length == 0){
      return "Iniciais inválidas"
    } else {
      return this.nome[0] + '.' + this.sobrenome[0]
    }
  }
}
