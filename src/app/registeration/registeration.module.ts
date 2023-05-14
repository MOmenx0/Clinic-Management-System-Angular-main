import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../gaurds/auth.guard';
import {TokenInterceptorService} from './../custom/validations/token-interceptor.service';
import { HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RegisterationRoutingModule } from './registeration-routing.module';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { ReceptionestRegisterComponent } from './receptionest-register/receptionest-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule,} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule}from '@angular/material/datepicker'
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { AllRegisterComponent } from '../all-register/all-register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PatientRegisterComponent,
    DoctorRegisterComponent,
    ReceptionestRegisterComponent,
    AllRegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RegisterationRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatSnackBarModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    // AuthService,
    // AuthGuard,
    // ReceptionistService,
    // { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:TokenInterceptorService,
    //   multi:true
    // }
  ],
  exports:[
    PatientRegisterComponent,
    DoctorRegisterComponent,
    ReceptionestRegisterComponent,
    MatIconModule
  ]
})
export class RegisterationModule { }
