import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarusuariosComponent } from './modificarusuarios.component';

describe('ModificarusuariosComponent', () => {
  let component: ModificarusuariosComponent;
  let fixture: ComponentFixture<ModificarusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarusuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
