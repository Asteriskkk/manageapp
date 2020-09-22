import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YArtEnrollmentComponent } from './y-art-enrollment.component';

describe('YArtEnrollmentComponent', () => {
  let component: YArtEnrollmentComponent;
  let fixture: ComponentFixture<YArtEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YArtEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YArtEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
