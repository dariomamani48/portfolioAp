import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTecnologiasComponent } from './listado-tecnologias.component';

describe('ListadoTecnologiasComponent', () => {
  let component: ListadoTecnologiasComponent;
  let fixture: ComponentFixture<ListadoTecnologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTecnologiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTecnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
