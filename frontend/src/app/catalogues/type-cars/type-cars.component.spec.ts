import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCarsComponent } from './type-cars.component';

describe('TypeCarsComponent', () => {
  let component: TypeCarsComponent;
  let fixture: ComponentFixture<TypeCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
