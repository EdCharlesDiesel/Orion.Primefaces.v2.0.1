import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ListUsersComponent }
	])],
	exports: [RouterModule]
})
export class ListUsersRoutingModule { }
