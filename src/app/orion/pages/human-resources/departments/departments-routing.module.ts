import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DatabaseLogComponent} from "../../admin/database-log/database-log.component";
import {DepartmentsComponent} from "./components/departments/departments.component";
@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: DepartmentsComponent }
  ])],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
