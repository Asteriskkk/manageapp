import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YViewOneDayBusPassComponent } from './y-view-one-day-bus-pass.component';

describe('YViewOneDayBusPassComponent', () => {
  let component: YViewOneDayBusPassComponent;
  let fixture: ComponentFixture<YViewOneDayBusPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YViewOneDayBusPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YViewOneDayBusPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
