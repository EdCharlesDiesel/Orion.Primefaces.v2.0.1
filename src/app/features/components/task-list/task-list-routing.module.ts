import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: TaskListComponent }
    ])],
    exports: [RouterModule]
})
export class TaskListRoutingModule { }
