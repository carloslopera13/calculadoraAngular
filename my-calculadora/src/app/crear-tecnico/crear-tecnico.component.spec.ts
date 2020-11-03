import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTecnicoComponent } from './crear-tecnico.component';

describe('CrearTecnicoComponent', () => {
  let component: CrearTecnicoComponent;
  let fixture: ComponentFixture<CrearTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
