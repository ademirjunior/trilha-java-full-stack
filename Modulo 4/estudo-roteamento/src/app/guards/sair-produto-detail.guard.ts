import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProdutoDetailComponent } from '../components/produto-detail/produto-detail.component';

@Injectable({
  providedIn: 'root',
})

export class SairProdutoDetailGuard implements CanDeactivate<ProdutoDetailComponent> {
  
  canDeactivate(component: ProdutoDetailComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!component.pressionouFechar){
      component.aviso();
    }

    return component.pressionouFechar;
  }
  
}
