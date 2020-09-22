import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YRaiseExceptionComponent } from './y-raise-exception.component';

describe('YRaiseExceptionComponent', () => {
  let component: YRaiseExceptionComponent;
  let fixture: ComponentFixture<YRaiseExceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YRaiseExceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YRaiseExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
