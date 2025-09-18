import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {DepartmentsComponent} from "./departments.component";
@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: DepartmentsComponent }
  ])],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
