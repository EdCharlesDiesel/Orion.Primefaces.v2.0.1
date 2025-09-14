import {CommonModule} from "@angular/common";
import {HumanResourcesRoutingModule} from "./human-resources-routing.module";
import {NgModule} from "@angular/core";
import {DepartmentModule} from "./department/department.module";
import {DepartmentRoutingModule} from "./department/department-routing.module";
import {EmployeeDepartmentHistoryModule} from "./employee-department-history/employee-department-history.module";
import {ExternalEmployeesModule} from "./external-employees/external-employees.module";


@NgModule({
	imports: [
		CommonModule,
		HumanResourcesRoutingModule,
    DepartmentModule,
    DepartmentRoutingModule,
    EmployeeDepartmentHistoryModule,
    ExternalEmployeesModule
	]
})
export class HumanResourcesModule { }
