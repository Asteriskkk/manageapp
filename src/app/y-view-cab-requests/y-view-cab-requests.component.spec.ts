import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YViewCabRequestsComponent } from './y-view-cab-requests.component';

describe('YViewCabRequestsComponent', () => {
  let component: YViewCabRequestsComponent;
  let fixture: ComponentFixture<YViewCabRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YViewCabRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YViewCabRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
