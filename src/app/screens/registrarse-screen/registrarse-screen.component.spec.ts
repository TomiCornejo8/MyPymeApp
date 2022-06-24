import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarseScreenComponent } from './registrarse-screen.component';

describe('RegistrarseScreenComponent', () => {
  let component: RegistrarseScreenComponent;
  let fixture: ComponentFixture<RegistrarseScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarseScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarseScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
