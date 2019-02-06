import { TestBed } from '@angular/core/testing';

import { TypeCarsService } from './type-cars.service';

describe('TypeCarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeCarsService = TestBed.get(TypeCarsService);
    expect(service).toBeTruthy();
  });
});
