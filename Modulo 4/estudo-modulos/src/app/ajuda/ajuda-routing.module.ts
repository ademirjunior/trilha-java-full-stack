import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjudaModule } from './ajuda.module';

const routes: Routes = [
  {
    path: 'faq',
    component: AjudaModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjudaRoutingModule { }
