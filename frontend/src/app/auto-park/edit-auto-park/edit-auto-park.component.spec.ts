import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAutoParkComponent } from './edit-auto-park.component';

describe('EditAutoParkComponent', () => {
  let component: EditAutoParkComponent;
  let fixture: ComponentFixture<EditAutoParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAutoParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAutoParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
