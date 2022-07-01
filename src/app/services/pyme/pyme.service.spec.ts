import { TestBed } from '@angular/core/testing';

import { PymeService } from './pyme.service';

describe('PymeService', () => {
  let service: PymeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PymeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
