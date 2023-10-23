import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { sairProdutoDetailGuard } from './sair-produto-detail.guard';

describe('sairProdutoDetailGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sairProdutoDetailGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
