import { Component } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  estaLigado: boolean = false;
  counter: number = 0;
  listaCompras: string[] = 
  ["Pizza", "Batata", "Refrigerante", "Hamburguer", "Anel de cebola"];

  toggle() {
    this.estaLigado = !this.estaLigado;
  }

  incrementar(){
    this.counter++;
  }

  alunos: Aluno[] = [
    {
      nome: "José Carlos",
      email: "jose.carlos@gmail.com",
      media: 6.5
    },
    {
      nome: "Maria Cláudia",
      email: "maria.claudia@gmail.com",
      media: 8.5
    },
    {
      nome: "Antônio José",
      email: "antonio.jose@gmail.com",
      media: 7.5
    },
    {
      nome: "Maria Jocé",
      email: "maria.jose@gmail.com",
      media: 5.5
    }

  ]

  alertar(aluno: Aluno) {
    alert(`Email enviado para ${aluno.email}`);
  }

  opcoes: string[] = ["gatinho", "cachorrinho"];

  opcaoSelecionada: string = 'nenhum';
}
