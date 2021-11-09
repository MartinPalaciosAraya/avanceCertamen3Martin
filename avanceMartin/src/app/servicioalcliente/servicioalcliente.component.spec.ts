import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioalclienteComponent } from './servicioalcliente.component';

describe('ServicioalclienteComponent', () => {
  let component: ServicioalclienteComponent;
  let fixture: ComponentFixture<ServicioalclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioalclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioalclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
