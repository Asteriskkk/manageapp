import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YQuarterlyShortfallComponent } from './y-quarterly-shortfall.component';

describe('YQuarterlyShortfallComponent', () => {
  let component: YQuarterlyShortfallComponent;
  let fixture: ComponentFixture<YQuarterlyShortfallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YQuarterlyShortfallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YQuarterlyShortfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
