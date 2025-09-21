import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { BusinessEntityComponent } from "./business-entity.component";


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: BusinessEntityComponent}
  ])],
  exports: [RouterModule]
})
export class BusinessEntityRoutingModule {
}
