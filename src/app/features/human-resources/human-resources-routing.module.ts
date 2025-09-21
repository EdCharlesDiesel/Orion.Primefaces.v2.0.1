import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EmployeePayHistoryModule} from "./employee-pay-history/employee-pay-history.module";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'departments',
      data: {breadcrumb: 'Button'},
      loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule)
    },
    {
      path: 'employee-department-history',
      data: {breadcrumb: 'Button'},
      loadChildren: () => import('./employee-department-history/employee-department-history.module').then(m => m.EmployeeDepartmentHistoryModule)
    },
    {
      path: 'employee-pay-histories',
      data: {breadcrumb: 'List'},
      loadChildren: () => import('./employee-pay-history/employee-pay-history.module').then(m => m.EmployeePayHistoryModule)
    },
    {
      path: 'internal-employees',
      data: {breadcrumb: 'Charts'},
      loadChildren: () => import('./internal-employees/internal-employees.module').then(m => m.InternalEmployeesModule)
    },
    {
      path: 'external-employees',
      data: {breadcrumb: 'Charts'},
      loadChildren: () => import('./external-employees/external-employees.module').then(m => m.ExternalEmployeesModule)
    },
    {
      path: 'job-candidate',
      data: {breadcrumb: 'Charts'},
      loadChildren: () => import('./job-candidates/job-candidates.module').then(m => m.JobCandidatesModule)
    },
    {
      path: 'shifts',
      data: {breadcrumb: 'Charts'},
      loadChildren: () => import('./shifts/shifts.module').then(m => m.ShiftsModule)
    },
    // {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class HumanResourcesRoutingModule {
}
