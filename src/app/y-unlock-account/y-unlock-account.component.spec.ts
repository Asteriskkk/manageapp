import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YUnlockAccountComponent } from './y-unlock-account.component';

describe('YUnlockAccountComponent', () => {
  let component: YUnlockAccountComponent;
  let fixture: ComponentFixture<YUnlockAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YUnlockAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YUnlockAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
