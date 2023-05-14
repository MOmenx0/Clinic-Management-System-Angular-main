import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineAddComponent } from '../medicine/medicine-add/medicine-add.component';
import { MedicineDetailsComponent } from '../medicine/medicine-details/medicine-details.component';
import { MedicineEditComponent } from '../medicine/medicine-edit/medicine-edit.component';
import { MedicineComponent } from '../medicine/medicine-list/medicine-list.component';

const routes: Routes = [
  {path:"add",component:MedicineAddComponent},
  {path:"list",component:MedicineComponent},
  {path:"",component:MedicineComponent},
  {path:"edit/:id",component:MedicineEditComponent},
  {path:"details/:id",component:MedicineDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicineRoutingModule { }
