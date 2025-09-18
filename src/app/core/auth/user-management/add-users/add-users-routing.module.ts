import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddUsersComponent } from './add-users.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AddUsersComponent }
	])],
	exports: [RouterModule]
})
export class AddUsersRoutingModule { }
