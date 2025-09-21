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
import { ConfirmationService } from 'primeng/api';
import {DepartmentsComponent} from "./departments/departments.component";
import {InternalEmployeesRoutingModule} from "./internal-employees/internal-employees-routing.module";
import {ExternalEmployeesRoutingModule} from "./external-employees/external-employees-routing.module";
import {
  EmployeeDepartmentHistoryRoutingModule
} from "./employee-department-history/employee-department-history-routing.module";
import {JobCandidatesRoutingModule} from "./job-candidates/job-candidates-routing.module";
import {ShiftsRoutingModule} from "./shifts/shifts-routing.module";
import {EmployeePayHistoryRoutingModule} from "./employee-pay-history/employee-pay-history-routing.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DepartmentsModule,
    DepartmentsRoutingModule,
    EmployeeDepartmentHistoryModule,
    EmployeeDepartmentHistoryRoutingModule,
    InternalEmployeesModule,
    InternalEmployeesRoutingModule,
    ExternalEmployeesModule,
    ExternalEmployeesRoutingModule,
    EmployeePayHistoryModule,
    EmployeePayHistoryRoutingModule,
    JobCandidatesModule,
    JobCandidatesRoutingModule,
    ShiftsModule,
    ShiftsRoutingModule,
  ],
  providers: [ConfirmationService]  // <-- Add this
})
export class HumanResourcesModule { }
