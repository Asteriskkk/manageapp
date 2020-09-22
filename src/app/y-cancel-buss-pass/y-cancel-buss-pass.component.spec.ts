import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YCancelBussPassComponent } from './y-cancel-buss-pass.component';

describe('YCancelBussPassComponent', () => {
  let component: YCancelBussPassComponent;
  let fixture: ComponentFixture<YCancelBussPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YCancelBussPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YCancelBussPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
