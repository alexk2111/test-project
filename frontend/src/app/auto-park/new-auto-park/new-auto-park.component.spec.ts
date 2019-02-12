import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAutoParkComponent } from './new-auto-park.component';

describe('NewAutoParkComponent', () => {
  let component: NewAutoParkComponent;
  let fixture: ComponentFixture<NewAutoParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAutoParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAutoParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
