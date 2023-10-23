import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { FaqComponent } from './components/faq/faq.component';
import { ProdutoDetailComponent } from './components/produto-detail/produto-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProdutosTabelaComponent } from './components/produtos-tabela/produtos-tabela.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioLogadoGuard } from './guards/usuario-logado.guard';
import { SairProdutoDetailGuard } from './guards/sair-produto-detail.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UsuarioLogadoGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
    canActivate: [UsuarioLogadoGuard]
  },
  {
    path: 'produtos/:cod',
    component: ProdutoDetailComponent,
    canActivate: [UsuarioLogadoGuard]
  },
  {
    path: 'produtos-tabela',
    component: ProdutosTabelaComponent,
    canActivate: [UsuarioLogadoGuard],
    children:[
      {
        path: ':cod',
        component: ProdutoDetailComponent,
        canDeactivate: [SairProdutoDetailGuard]
      },
    ]
  },
  {
    path: 'ajuda',
    redirectTo: 'faq'
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
