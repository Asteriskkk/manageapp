import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCocoComponent } from './about-coco.component';

describe('AboutCocoComponent', () => {
  let component: AboutCocoComponent;
  let fixture: ComponentFixture<AboutCocoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCocoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
