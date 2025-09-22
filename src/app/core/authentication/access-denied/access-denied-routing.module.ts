import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AccessDeniedComponent} from "./access-denied.component";


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AccessDeniedComponent},
  ])],
  exports: [RouterModule]
})
export class AccessDeniedRoutingModule {
}
