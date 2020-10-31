import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../user/guard/auth.guard';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';

const routes: Routes = [
  {
    path: "", component: ListRestoComponent
  },
  {
    path: "add-resto", component: AddRestoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "update-resto/:_id", component: UpdateRestoComponent,
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestoRoutingModule { }
