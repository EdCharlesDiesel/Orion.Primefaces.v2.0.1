import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';

@NgModule({
    imports: [
        CommonModule,
        TaskListRoutingModule,
        ButtonModule
    ],
    declarations: [TaskListComponent]
})
export class TaskListModule { }
