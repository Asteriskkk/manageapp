import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YResetPasswordComponent } from './y-reset-password.component';

describe('YResetPasswordComponent', () => {
  let component: YResetPasswordComponent;
  let fixture: ComponentFixture<YResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
