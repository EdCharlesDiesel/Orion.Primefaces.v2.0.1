import {EmployeePayHistoryComponent} from "./employee-pay-history.component";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: EmployeePayHistoryComponent }
	])],
	exports: [RouterModule]
})
export class EmployeePayHistoryRoutingModule { }
