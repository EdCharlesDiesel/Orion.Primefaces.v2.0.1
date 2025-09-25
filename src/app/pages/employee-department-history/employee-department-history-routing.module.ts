import {EmployeeDepartmentHistoryComponent} from "./employee-department-history.component";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: EmployeeDepartmentHistoryComponent}
  ])],
  exports: [RouterModule]
})
export class EmployeeDepartmentHistoryRoutingModule {
}
