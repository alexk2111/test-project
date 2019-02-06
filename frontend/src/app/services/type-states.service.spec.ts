import { TestBed } from '@angular/core/testing';

import { TypeStatesService } from './type-states.service';

describe('TypeStatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeStatesService = TestBed.get(TypeStatesService);
    expect(service).toBeTruthy();
  });
});
