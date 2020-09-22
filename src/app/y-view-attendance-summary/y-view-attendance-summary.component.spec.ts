import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YViewAttendanceSummaryComponent } from './y-view-attendance-summary.component';

describe('YViewAttendanceSummaryComponent', () => {
  let component: YViewAttendanceSummaryComponent;
  let fixture: ComponentFixture<YViewAttendanceSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YViewAttendanceSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YViewAttendanceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
