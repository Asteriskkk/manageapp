import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YApproveExceptionComponent } from './y-approve-exception.component';

describe('YApproveExceptionComponent', () => {
  let component: YApproveExceptionComponent;
  let fixture: ComponentFixture<YApproveExceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YApproveExceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YApproveExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
