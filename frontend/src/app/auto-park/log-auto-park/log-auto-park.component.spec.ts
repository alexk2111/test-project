import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAutoParkComponent } from './log-auto-park.component';

describe('LogAutoParkComponent', () => {
  let component: LogAutoParkComponent;
  let fixture: ComponentFixture<LogAutoParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogAutoParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogAutoParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
