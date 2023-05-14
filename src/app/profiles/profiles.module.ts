import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { EmployeeModule } from './empolyee/employee.module';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProfilesRoutingModule],
  exports: [EmployeeModule, PatientModule, DoctorModule],
})
export class ProfilesModule {}
