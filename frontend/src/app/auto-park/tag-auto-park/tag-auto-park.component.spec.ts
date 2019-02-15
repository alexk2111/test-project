import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagAutoParkComponent } from './tag-auto-park.component';

describe('TagAutoParkComponent', () => {
  let component: TagAutoParkComponent;
  let fixture: ComponentFixture<TagAutoParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagAutoParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagAutoParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
