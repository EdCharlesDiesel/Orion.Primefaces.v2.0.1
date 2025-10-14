import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppsRoutingModule} from './apps-routing.module';
import {FormsModule} from "@angular/forms";
import {TaskListModule} from "./task-list/task-list.module";

@NgModule({
  imports: [
    CommonModule,
    AppsRoutingModule,
    FormsModule,
    TaskListModule
  ],
  declarations: []
})
export class AppsModule {
}
