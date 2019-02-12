import { TestBed } from '@angular/core/testing';

import { AutoParkService } from './auto-park.service';

describe('AutoParkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoParkService = TestBed.get(AutoParkService);
    expect(service).toBeTruthy();
  });
});
