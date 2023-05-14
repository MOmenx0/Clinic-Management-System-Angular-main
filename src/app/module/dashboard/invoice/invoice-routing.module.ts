import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvoiceComponent } from './invoice-table/invoice.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';

const routes: Routes = [
  {path:"list",component:InvoiceComponent},
  {path:"",component:InvoiceComponent},
  {path:"details/:id",component:InvoiceViewComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
