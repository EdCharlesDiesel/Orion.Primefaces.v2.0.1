
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ExternalEmployeesComponent} from "./external-employees.component";


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ExternalEmployeesComponent }
	])],
	exports: [RouterModule]
})
export class ExternalEmployeesRoutingModule { }
