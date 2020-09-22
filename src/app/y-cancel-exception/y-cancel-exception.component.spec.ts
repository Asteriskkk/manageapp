import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YCancelExceptionComponent } from './y-cancel-exception.component';

describe('YCancelExceptionComponent', () => {
  let component: YCancelExceptionComponent;
  let fixture: ComponentFixture<YCancelExceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YCancelExceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YCancelExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
