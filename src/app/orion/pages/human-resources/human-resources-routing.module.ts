import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'departments',
      data: {breadcrumb: 'Button'},
      loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
    },
    // {
    //   path: 'employee-department-history',
    //   data: {breadcrumb: 'Button'},
    //   loadChildren: () => import('./error-log/error-log.module').then(m => m.ErrorLogModule)
    // },
    // {
    //   path: 'employee-pay-histories',
    //   data: {breadcrumb: 'List'},
    //   loadChildren: () => import('./database-log/database-log.module').then(m => m.DatabaseLogModule)
    // },
    // {
    //   path: 'external-employees',
    //   data: {breadcrumb: 'Charts'},
    //   loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
    // },
    // {
    //   path: 'job-candidates',
    //   data: {breadcrumb: 'Charts'},
    //   loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
    // },
    // {
    //   path: 'shifts',
    //   data: {breadcrumb: 'Charts'},
    //   loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
    // },
    {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class HumanResourcesRoutingModule {
}
