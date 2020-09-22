import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YApplyOneDayBusPassComponent } from './y-apply-one-day-bus-pass.component';

describe('YApplyOneDayBusPassComponent', () => {
  let component: YApplyOneDayBusPassComponent;
  let fixture: ComponentFixture<YApplyOneDayBusPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YApplyOneDayBusPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YApplyOneDayBusPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
