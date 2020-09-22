import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YViewBusPassComponent } from './y-view-bus-pass.component';

describe('YViewBusPassComponent', () => {
  let component: YViewBusPassComponent;
  let fixture: ComponentFixture<YViewBusPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YViewBusPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YViewBusPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
