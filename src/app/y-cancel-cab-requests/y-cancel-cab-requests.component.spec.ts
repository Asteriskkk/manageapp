import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YCancelCabRequestsComponent } from './y-cancel-cab-requests.component';

describe('YCancelCabRequestsComponent', () => {
  let component: YCancelCabRequestsComponent;
  let fixture: ComponentFixture<YCancelCabRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YCancelCabRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YCancelCabRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
