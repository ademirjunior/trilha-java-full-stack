import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteioNumeroComponent } from './sorteio-numero.component';

describe('SorteioNumeroComponent', () => {
  let component: SorteioNumeroComponent;
  let fixture: ComponentFixture<SorteioNumeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SorteioNumeroComponent]
    });
    fixture = TestBed.createComponent(SorteioNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
