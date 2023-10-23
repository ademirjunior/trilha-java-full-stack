import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAlunoReactiveComponent } from './cadastro-aluno-reactive.component';

describe('CadastroAlunoReactiveComponent', () => {
  let component: CadastroAlunoReactiveComponent;
  let fixture: ComponentFixture<CadastroAlunoReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAlunoReactiveComponent]
    });
    fixture = TestBed.createComponent(CadastroAlunoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
