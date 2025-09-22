import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {WishlistComponent} from "./wish-list.component";


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: WishlistComponent}
  ])],
  exports: [RouterModule]
})
export class WishListRoutingModule {
}
