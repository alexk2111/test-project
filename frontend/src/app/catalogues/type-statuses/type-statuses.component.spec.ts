import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeStatusesComponent } from './type-statuses.component';

describe('TypeStatusesComponent', () => {
  let component: TypeStatusesComponent;
  let fixture: ComponentFixture<TypeStatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeStatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
