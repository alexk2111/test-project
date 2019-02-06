import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTypeCarComponent } from './new-type-car.component';

describe('NewTypeCarComponent', () => {
  let component: NewTypeCarComponent;
  let fixture: ComponentFixture<NewTypeCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTypeCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTypeCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
