import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  providers: [ConfirmationService]  // <-- Add this
})
export class ProfileModule { }
