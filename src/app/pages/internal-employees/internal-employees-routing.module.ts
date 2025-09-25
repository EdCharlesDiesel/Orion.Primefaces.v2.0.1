
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {InternalEmployeesComponent} from "./internal-employees.component";


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: InternalEmployeesComponent }
	])],
	exports: [RouterModule]
})
export class InternalEmployeesRoutingModule { }
