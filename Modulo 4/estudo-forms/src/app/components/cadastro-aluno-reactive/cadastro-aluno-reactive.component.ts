import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-aluno-reactive',
  templateUrl: './cadastro-aluno-reactive.component.html',
  styleUrls: ['./cadastro-aluno-reactive.component.css']
})

export class CadastroAlunoReactiveComponent {
  form: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email, this.emailEscolar]),
    nivel: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)])
  });

  emailEscolar(control: AbstractControl): ValidationErrors | null {
    return !control.value.endsWith('@escola.org') ? {emailEscolar: true} : null;
  }

  get nome(){
    return this.form.get('nome')!;
  }

  get email(){
    return this.form.get('email')!;
  }

  get nivel(){
    return this.form.get('nivel')!;
  }

  get cidade(){
    return this.form.get('cidade')!;
  }

  get estado(){
    return this.form.get('estado')!;
  }

  onSubmit() {
    console.log(this.form.value)
  }

}
