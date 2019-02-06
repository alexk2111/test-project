import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTypeStatesComponent } from './new-type-states.component';

describe('NewTypeStatesComponent', () => {
  let component: NewTypeStatesComponent;
  let fixture: ComponentFixture<NewTypeStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTypeStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTypeStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
