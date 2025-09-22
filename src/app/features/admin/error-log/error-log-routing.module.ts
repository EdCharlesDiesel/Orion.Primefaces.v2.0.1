import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ErrorLogComponent} from "./error-log.component";


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ErrorLogComponent}
  ])],
  exports: [RouterModule]
})
export class ErrorLogRoutingModule {
}
