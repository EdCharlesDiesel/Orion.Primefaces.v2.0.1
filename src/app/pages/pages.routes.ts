import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Empty } from './empty/empty';
import { Departments } from './human-resources/departments/departments';
import { EmployeePayHistory } from '../core/models/employee-pay-history.model';
import { CreateReadUpdateDeleteComponent } from './CreateReadUpdateDelete/CreateReadUpdateDelete.component';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'empty', component: Empty },
    { path: 'departments', component: Departments },
    { path: 'employee-pay-history', component: EmployeePayHistory },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
