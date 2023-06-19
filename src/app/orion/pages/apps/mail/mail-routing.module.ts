import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MailComponent } from './mail.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MailComponent }
    ])],
    exports: [RouterModule]
})
export class MailRoutingModule { }
