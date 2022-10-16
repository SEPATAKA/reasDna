import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperviewViewStudentComponent } from './superview-view-student.component';

describe('SuperviewViewStudentComponent', () => {
  let component: SuperviewViewStudentComponent;
  let fixture: ComponentFixture<SuperviewViewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperviewViewStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperviewViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
