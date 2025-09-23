import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    // {
    //   path: 'wish-list',
    //   data: {breadcrumb: 'Button'},
    //   loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule)
    // },
    // {
    //   path: 'employee-department-history',
    //   data: {breadcrumb: 'Button'},
    //   loadChildren: () => import('./employee-department-history/employee-department-history.module').then(m => m.EmployeeDepartmentHistoryModule)
    // },
    // {
    //   path: 'employee-pay-histories',
    //   data: {breadcrumb: 'List'},
    //   loadChildren: () => import('./employee-pay-history/employee-pay-history.module').then(m => m.EmployeePayHistoryModule)
    // },
    // {
    //   path: 'internal-employees',
    //   data: {breadcrumb: 'Charts'},
    //   loadChildren: () => import('./internal-employees/internal-employees.module').then(m => m.InternalEmployeesModule)
    // },
    {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
