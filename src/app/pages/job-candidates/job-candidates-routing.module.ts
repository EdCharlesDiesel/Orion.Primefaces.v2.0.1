import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {JobCandidatesComponent} from "./job-candidates.component";


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: JobCandidatesComponent}
  ])],
  exports: [RouterModule]
})
export class JobCandidatesRoutingModule {
}
