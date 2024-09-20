import { TestBed } from '@angular/core/testing';

import { DeviceHealthService } from './device-health.service';

describe('DeviceHealthService', () => {
  let service: DeviceHealthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceHealthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
