import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YCancelOneDayBusPassComponent } from './y-cancel-one-day-bus-pass.component';

describe('YCancelOneDayBusPassComponent', () => {
  let component: YCancelOneDayBusPassComponent;
  let fixture: ComponentFixture<YCancelOneDayBusPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YCancelOneDayBusPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YCancelOneDayBusPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
