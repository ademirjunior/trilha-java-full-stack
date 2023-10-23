import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutoComponent } from './produto/produto.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { Exercicio1Component } from './exercicios/exercicio1/exercicio1.component';
import { DiretivasComponent } from './exemplos/diretivas/diretivas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesComponent } from './exemplos/pipes/pipes.component';
import { OcultarEmailPipe } from './pipes/ocultar-email.pipe';
import { LimitarTextoPipe } from './pipes/limitar-texto.pipe';
import { SomarArrayPipe } from './pipes/somar-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ListaProdutosComponent,
    ProdutoComponent,
    FooterComponent,
    Exercicio1Component,
    DiretivasComponent,
    PipesComponent,
    OcultarEmailPipe,
    LimitarTextoPipe,
    SomarArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
