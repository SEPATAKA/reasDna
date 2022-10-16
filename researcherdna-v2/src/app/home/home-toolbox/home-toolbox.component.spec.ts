import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeToolboxComponent } from './home-toolbox.component';

describe('HomeToolboxComponent', () => {
  let component: HomeToolboxComponent;
  let fixture: ComponentFixture<HomeToolboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeToolboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
