import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuPipePipe } from './pipes/meu-pipe.pipe';
import { AlertaComponent } from './components/alerta/alerta.component';



@NgModule({
  declarations: [
    MeuPipePipe,
    AlertaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MeuPipePipe,
    AlertaComponent
  ]
})
export class SharedModule { }
