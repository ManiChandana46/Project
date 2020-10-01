import { TestBed } from '@angular/core/testing';

import { AirlinesServiceService } from './airlines-service.service';

describe('AirlinesServiceService', () => {
  let service: AirlinesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirlinesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
