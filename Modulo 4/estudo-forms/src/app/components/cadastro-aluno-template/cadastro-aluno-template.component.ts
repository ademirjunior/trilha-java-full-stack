import { Component } from '@angular/core';
import { Aluno } from 'src/app/models/aluno';

@Component({
  selector: 'app-cadastro-aluno-template',
  templateUrl: './cadastro-aluno-template.component.html',
  styleUrls: ['./cadastro-aluno-template.component.css']
})
export class CadastroAlunoTemplateComponent {

  aluno: Aluno = {
    nome: '',
    email: '',
    descricao: '',
    nivel: '',
    usuarioAtivo: false,
    endereco: {
      cidade: '',
      estado: ''
    }
  }

  onSubmit(){
    console.log(this.aluno);
  }

}
