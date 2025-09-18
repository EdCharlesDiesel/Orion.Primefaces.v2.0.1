import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilesComponent } from './files.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: FilesComponent }
    ])],
    exports: [RouterModule]
})
export class FilesRoutingModule { }
