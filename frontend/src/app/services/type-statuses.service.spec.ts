import { TestBed } from '@angular/core/testing';

import { TypeStatusesService } from './type-statuses.service';

describe('TypeStatusesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeStatusesService = TestBed.get(TypeStatusesService);
    expect(service).toBeTruthy();
  });
});
