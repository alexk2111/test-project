import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTypeStatusesComponent } from './new-type-statuses.component';

describe('NewTypeStatusesComponent', () => {
  let component: NewTypeStatusesComponent;
  let fixture: ComponentFixture<NewTypeStatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTypeStatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTypeStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
