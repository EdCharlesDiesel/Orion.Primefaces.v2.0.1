
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { CountryRegionsComponent } from "./country-regions.component";



@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: CountryRegionsComponent }
	])],
	exports: [RouterModule]
})
export class CountryRegionsModule { }
