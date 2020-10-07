import { TestBed } from '@angular/core/testing';

import { ViewFlightService } from './view-flight.service';

describe('ViewFlightService', () => {
  let service: ViewFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
