import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCategoriaComponent } from './crearcateogoria.component';

describe('CrearTopicoComponent', () => {
  let component: CrearCategoriaComponent;
  let fixture: ComponentFixture<CrearCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCategoriaComponent]
    });
    fixture = TestBed.createComponent(CrearCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});