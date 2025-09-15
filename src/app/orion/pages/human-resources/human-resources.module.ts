import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DepartmentsModule} from "./departments/departments.module";

@NgModule({
  imports: [
    CommonModule,
    DepartmentsModule
  ]
})
export class HumanResourcesModule { }
