import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YApplyBussPassComponent } from './y-apply-buss-pass.component';

describe('YApplyBussPassComponent', () => {
  let component: YApplyBussPassComponent;
  let fixture: ComponentFixture<YApplyBussPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YApplyBussPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YApplyBussPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
