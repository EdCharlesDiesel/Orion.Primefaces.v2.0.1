import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SimilarProductsComponent} from "./similar-products.component";


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: SimilarProductsComponent}
  ])],
  exports: [RouterModule]
})
export class SimilarProductsModule {
}
