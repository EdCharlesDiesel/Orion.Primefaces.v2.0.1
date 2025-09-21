import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ShiftsComponent} from "./shifts.component";


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ShiftsComponent}
  ])],
  exports: [RouterModule]
})
export class ShiftsRoutingModule {
}
