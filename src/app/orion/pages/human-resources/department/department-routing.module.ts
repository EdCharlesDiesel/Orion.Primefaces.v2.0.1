import {NgModule} from "@angular/core";
import {DepartmentComponent} from "./department.component";
import {RouterModule} from "@angular/router";


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: DepartmentComponent }
	])],
	exports: [RouterModule]
})
export class DepartmentRoutingModule { }
