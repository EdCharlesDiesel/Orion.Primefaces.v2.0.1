import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ThemePickerComponent} from "./theme-picker.component";



@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ThemePickerComponent}
  ])],
  exports: [RouterModule]
})
export class ThemePickerRoutingModule {
}
