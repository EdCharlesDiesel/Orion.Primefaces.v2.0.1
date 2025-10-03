import { Routes } from '@angular/router';
import { Departments } from '../departments/departments';
import { EmployeeDepartmentHistoryComponent } from './employee-department-history/employee-department-history.component';
import { EmployeePayHistoryComponent } from './employee-pay-history/employee-pay-history.component';
import { ExternalEmployeesComponent } from './external-employees/external-employees.component';
import { InternalEmployeesComponent } from './internal-employees/internal-employees.component';
import { JobCandidatesComponent } from './job-candidates/job-candidates.component';
import { ShiftsComponent } from './shifts/shifts';


export default [
    { path: 'departments', data: { breadcrumb: 'Button' }, component: Departments },
    { path: 'employee-department-history', data: { breadcrumb: 'Button' }, component: EmployeeDepartmentHistoryComponent },
    { path: 'employee-pay-history', data: { breadcrumb: 'Button' }, component: EmployeePayHistoryComponent },
    { path: 'external-employees', data: { breadcrumb: 'Button' }, component: ExternalEmployeesComponent },
    { path: 'internal-employees', data: { breadcrumb: 'Button' }, component: InternalEmployeesComponent },
    { path: 'job-candidate', data: { breadcrumb: 'Button' }, component: JobCandidatesComponent },
    { path: 'shifts', data: { breadcrumb: 'Button' }, component: ShiftsComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
