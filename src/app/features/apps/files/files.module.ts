import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent } from './files.component';

@NgModule({
    imports: [
        CommonModule,
        FilesRoutingModule,
        ButtonModule
    ],
    declarations: [FilesComponent]
})
export class FilesModule { }
