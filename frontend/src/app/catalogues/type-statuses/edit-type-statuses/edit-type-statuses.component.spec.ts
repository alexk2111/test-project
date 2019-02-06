import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeStatusesComponent } from './edit-type-statuses.component';

describe('EditTypeStatusesComponent', () => {
  let component: EditTypeStatusesComponent;
  let fixture: ComponentFixture<EditTypeStatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTypeStatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypeStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
