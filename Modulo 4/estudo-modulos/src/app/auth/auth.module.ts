import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { OcultarEmailPipe } from './pipes/ocultar-email.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    OcultarEmailPipe
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    OcultarEmailPipe
  ]
})
export class AuthModule { }
