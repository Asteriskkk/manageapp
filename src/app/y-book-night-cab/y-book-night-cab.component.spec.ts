import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YBookNightCabComponent } from './y-book-night-cab.component';

describe('YBookNightCabComponent', () => {
  let component: YBookNightCabComponent;
  let fixture: ComponentFixture<YBookNightCabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YBookNightCabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YBookNightCabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
