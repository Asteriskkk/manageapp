import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YChangePasswordComponent } from './y-change-password.component';

describe('YChangePasswordComponent', () => {
  let component: YChangePasswordComponent;
  let fixture: ComponentFixture<YChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
