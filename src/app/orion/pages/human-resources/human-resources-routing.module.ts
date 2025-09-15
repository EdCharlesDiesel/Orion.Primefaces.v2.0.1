import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EmployeePayHistoryModule} from "./employee-pay-history/employee-pay-history.module";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'departments',
      data: {breadcrumb: 'Button'},
      loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentModule)
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
      path: 'external-employees',
      data: {breadcrumb: 'Charts'},
      loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
    },
    {
      path: 'job-candidates',
      data: {breadcrumb: 'Charts'},
      loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
    },
    {
      path: 'shifts',
      data: {breadcrumb: 'Charts'},
      loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
    },
    {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class HumanResourcesRoutingModule {
}
