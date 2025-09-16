import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DepartmentsModule} from "./departments/departments.module";
import {DepartmentsRoutingModule} from "./departments/departments-routing.module";
import {InternalEmployeesModule} from "./internal-employees/internal-employees.module";
import {ExternalEmployeesModule} from "./external-employees/external-employees.module";
import {EmployeePayHistoryModule} from "./employee-pay-history/employee-pay-history.module";
import {EmployeeDepartmentHistoryModule} from "./employee-department-history/employee-department-history.module";
import {JobCandidatesModule} from "./job-candidates/job-candidates.module";
import {ShiftsModule} from "./shifts/shifts.module";

@NgModule({
  imports: [
    CommonModule,
    DepartmentsModule,
    DepartmentsRoutingModule,
    InternalEmployeesModule,
    ExternalEmployeesModule,
    EmployeePayHistoryModule,
    EmployeeDepartmentHistoryModule,
    JobCandidatesModule,
    ShiftsModule,
  ]
})
export class HumanResourcesModule { }
