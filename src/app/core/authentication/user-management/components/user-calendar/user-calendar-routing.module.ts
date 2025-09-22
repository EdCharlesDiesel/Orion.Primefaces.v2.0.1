import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListUsersComponent} from '../list-users/list-users.component';
import {UserCalendarComponent} from "./user-calendar.component";

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: UserCalendarComponent}
  ])],
  exports: [RouterModule]
})
export class UserCalendarRoutingModule {
}
