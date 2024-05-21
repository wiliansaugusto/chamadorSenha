import { TestBed } from '@angular/core/testing';

import { SenhaServiceService } from './senha-service.service';

describe('SenhaServiceService', () => {
  let service: SenhaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenhaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
