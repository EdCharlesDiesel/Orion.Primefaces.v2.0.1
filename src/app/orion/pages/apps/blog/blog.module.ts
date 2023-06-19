import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
    imports: [
        CommonModule,
        BlogRoutingModule,
        ButtonModule
    ],
    declarations: [BlogComponent]
})
export class BlogModule { }
