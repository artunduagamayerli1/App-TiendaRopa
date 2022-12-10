import { TestBed } from '@angular/core/testing';

import { ServiciolistarService } from './serviciolistar.service';

describe('ServiciolistarService', () => {
  let service: ServiciolistarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciolistarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
