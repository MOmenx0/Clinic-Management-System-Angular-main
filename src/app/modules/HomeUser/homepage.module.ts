import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/home/about/about.component';
import { ServicesComponent } from './components/home/servicesHome/services.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { ApoimentComponent } from './components/home/apoiment/apoiment.component';
import { PrescriptionListComponent } from './components/prescription/prescription-list/prescription-list.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MedicensearchComponent } from './components/prescription/medicensearch/medicensearch.component';
import {  ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { AddediteformComponent } from './components/prescription/addediteform/addediteform.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { ShowinfoComponent } from './components/prescription/showinfo/showinfo.component';
import { HeroComponent } from './components/home/hero/hero.component';
import {MatBadgeModule} from '@angular/material/badge';
import { AppointmentComponent } from './appointment/appointment.component';
import { DividerModule } from 'primeng/divider';
import { RatingModule } from 'primeng/rating';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PopupComponent } from './components/popup/popup.component';
import { findDoctorsComponent } from './components/findDoctors/findDoctors.component';

@NgModule({
  declarations: [
   HomepageComponent,
   FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    NotFoundComponent,
    // ApoimentComponent,
    HeroComponent,
    PrescriptionListComponent ,
     MedicensearchComponent,
    AddediteformComponent,
    ShowinfoComponent,
    AppointmentComponent,
    PopupComponent,
    findDoctorsComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FormsModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatBadgeModule,
    DividerModule,
    RatingModule,
    ListboxModule,
    ButtonModule,
    CardModule
   

    

  ],
  providers: [{ provide: MatDialogRef, useValue: {}}, { provide: MAT_DIALOG_DATA, useValue: {} }, ],

 
})
export class HomepageModule { }
