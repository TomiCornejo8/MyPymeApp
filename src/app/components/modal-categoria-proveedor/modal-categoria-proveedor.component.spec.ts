import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCategoriaProveedorComponent } from './modal-categoria-proveedor.component';

describe('ModalCategoriaProveedorComponent', () => {
  let component: ModalCategoriaProveedorComponent;
  let fixture: ComponentFixture<ModalCategoriaProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCategoriaProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCategoriaProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
