import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarScreenComponent } from './ingresar-screen.component';

describe('IngresarScreenComponent', () => {
  let component: IngresarScreenComponent;
  let fixture: ComponentFixture<IngresarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
