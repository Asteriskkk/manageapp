import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YViewExceptionComponent } from './y-view-exception.component';

describe('YViewExceptionComponent', () => {
  let component: YViewExceptionComponent;
  let fixture: ComponentFixture<YViewExceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YViewExceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YViewExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
