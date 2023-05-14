import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentScanComponent } from './appointment-scan.component';

describe('AppointmentScanComponent', () => {
  let component: AppointmentScanComponent;
  let fixture: ComponentFixture<AppointmentScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentScanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
