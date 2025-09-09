import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SystemInformationComponent } from './system-information.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: SystemInformationComponent }
	])],
	exports: [RouterModule]
})
export class SystemInformationRoutingModule { }
