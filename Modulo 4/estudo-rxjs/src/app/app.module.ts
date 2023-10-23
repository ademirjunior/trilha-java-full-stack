import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteObservableComponent } from './components/teste-observable/teste-observable.component';
import { RelogioComponent } from './components/relogio/relogio.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteObservableComponent,
    RelogioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
