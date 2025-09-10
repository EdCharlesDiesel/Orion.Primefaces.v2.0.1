import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatabaseLogComponent } from './database-log.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: DatabaseLogComponent }
	])],
	exports: [RouterModule]
})
export class DatabaseLogRoutingModule { }
