import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'topbar-widget',
    styleUrl: './topbar-widget.component.scss',
    imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule],
    templateUrl: './topbar-widget.component.html',
})
export class TopbarWidget {
    constructor(public router: Router) {}
}
