import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YRecentShortfallComponent } from './y-recent-shortfall.component';

describe('YRecentShortfallComponent', () => {
  let component: YRecentShortfallComponent;
  let fixture: ComponentFixture<YRecentShortfallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YRecentShortfallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YRecentShortfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
