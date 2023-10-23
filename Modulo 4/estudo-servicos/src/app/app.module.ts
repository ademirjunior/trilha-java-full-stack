import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SorteioPessoasComponent } from './components/sorteio-pessoas/sorteio-pessoas.component';
import { FormsModule } from '@angular/forms';
import { SorteioNumeroComponent } from './components/sorteio-numero/sorteio-numero.component';

@NgModule({
  declarations: [
    AppComponent,
    SorteioPessoasComponent,
    SorteioNumeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
