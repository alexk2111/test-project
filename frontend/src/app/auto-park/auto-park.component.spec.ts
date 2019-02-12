import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoParkComponent } from './auto-park.component';

describe('AutoParkComponent', () => {
  let component: AutoParkComponent;
  let fixture: ComponentFixture<AutoParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
