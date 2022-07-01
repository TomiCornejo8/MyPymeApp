import { TestBed } from '@angular/core/testing';

import { CategoriaProveedorService } from './categoria-proveedor.service';

describe('CategoriaProveedorService', () => {
  let service: CategoriaProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
