import { Documentation } from '../core/admin/documentation/documentation';
import { Empty } from './empty/empty';
import { Departments } from '../core/admin/human-resources/departments/departments';
import { EmployeePayHistory } from '../core/models/employee-pay-history.model';
import { Routes } from '@angular/router';


export default [
    { path: 'documentation', component: Documentation },
    { path: 'empty', component: Empty },
    { path: 'departments', component: Departments },
    { path: 'employee-pay-history', component: EmployeePayHistory },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
