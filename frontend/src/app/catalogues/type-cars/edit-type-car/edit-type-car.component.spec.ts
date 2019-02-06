import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeCarComponent } from './edit-type-car.component';

describe('EditTypeCarComponent', () => {
  let component: EditTypeCarComponent;
  let fixture: ComponentFixture<EditTypeCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTypeCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypeCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
