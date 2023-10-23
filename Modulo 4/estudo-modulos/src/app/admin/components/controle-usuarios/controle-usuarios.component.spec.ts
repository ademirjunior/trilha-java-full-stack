import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleUsuariosComponent } from './controle-usuarios.component';

describe('ControleUsuariosComponent', () => {
  let component: ControleUsuariosComponent;
  let fixture: ComponentFixture<ControleUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControleUsuariosComponent]
    });
    fixture = TestBed.createComponent(ControleUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
