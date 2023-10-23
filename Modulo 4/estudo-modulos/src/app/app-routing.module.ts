import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './auth/components/cadastro/cadastro.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./ajuda/ajuda.module').then(m => m.AjudaModule)
  },
  { path: 'produtos', 
  loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
