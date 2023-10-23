import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { UsuarioLogadoGuard } from './usuario-logado.guard';

describe('usuarioLogadoGuard', () => {
 // const usuarioLogadoGuard: UsuarioLogadoGuard;
  //const executeGuard: CanActivateFn = (...guardParameters) => 
  //    TestBed.runInInjectionContext(() => usuarioLogadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    //expect(executeGuard).toBeTruthy();
  });
});
