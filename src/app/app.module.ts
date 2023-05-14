import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';


import { DividerModule } from 'primeng/divider';
import { HomeComponent } from './components/home/home.component';
import { RatingModule } from 'primeng/rating';
import { ListboxModule } from 'primeng/listbox';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { RegisterationModule } from './registeration/registeration.module';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TokenInterceptorService } from './custom/validations/token-interceptor.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './gaurds/auth.guard';
import { CommonModule } from '@angular/common';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    UpdateDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    DashboardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DividerModule,
    RatingModule,
    FormsModule ,
    ListboxModule,
    ButtonModule,
    RegisterationModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
