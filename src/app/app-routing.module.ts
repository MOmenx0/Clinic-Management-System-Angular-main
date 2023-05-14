import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './modules/HomeUser/components/home/about/about.component';
import { ServicesComponent } from './modules/HomeUser/components/home/servicesHome/services.component';
import { HomepageComponent } from './modules/HomeUser/homepage.component';
import { AuthGuard } from './gaurds/auth.guard';
import { LoginComponent } from './login/login.component';
import { AllRegisterComponent } from './all-register/all-register.component';
import { NotFoundComponent } from './modules/HomeUser/components/not-found/not-found.component';


const routes: Routes = [
  { path: "register", component:AllRegisterComponent},
  { path: "login", component: LoginComponent},
  {
    path: '',
    loadChildren: () =>
      import('./modules/HomeUser/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./module/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
      canActivate:[AuthGuard] },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profiles/profiles.module').then((p) => p.ProfilesModule ),
  canActivate:[AuthGuard] },
  { path: "**", component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
