import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteObservableComponent } from './teste-observable.component';

describe('TesteObservableComponent', () => {
  let component: TesteObservableComponent;
  let fixture: ComponentFixture<TesteObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesteObservableComponent]
    });
    fixture = TestBed.createComponent(TesteObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
