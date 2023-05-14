import { ComponentFixture, TestBed } from '@angular/core/testing';

import { findDoctorsComponent } from './findDoctors.component';

describe('findDoctors', () => {
  let component: findDoctorsComponent;
  let fixture: ComponentFixture<findDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ findDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(findDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
