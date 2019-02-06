import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeStatesComponent } from './edit-type-states.component';

describe('EditTypeStatesComponent', () => {
  let component: EditTypeStatesComponent;
  let fixture: ComponentFixture<EditTypeStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTypeStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypeStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
