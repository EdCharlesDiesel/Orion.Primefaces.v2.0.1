import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) {
  }

  ngOnInit() {
    this.model = [
      {
        label: 'Dashboard',
        items: [
          {label: 'Ecommerce', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/']}
        ]
      },
      {
        label: 'Apps',
        items: [
          {label: 'Blog', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
          {label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: ['//uikit/charts']},
          {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
          {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
          {label: 'Mail', icon: 'pi pi-fw pi-inbox', routerLink: ['/uikit/charts']},
          {label: 'Task List', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
        ]
      },
      {
        label: 'E-Commerce',
        items: [
          {label: 'Product Overview', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
          {label: 'Product List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
          {label: 'New Product', icon: 'pi pi-fw pi-plus', routerLink: ['/uikit/list']},
          {label: 'Shopping Cart', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/uikit/list']},
          {label: 'Checkout', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/list']},
          {label: 'Order History', icon: 'pi pi-fw pi-history', routerLink: ['/uikit/list']},
          {label: 'Order Summary', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/list']},
        ]
      },
      {
        label: 'User Management',
        items: [
          {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/formlayout']},
          {label: 'Create', icon: 'pi pi-fw pi-plus', routerLink: ['/uikit/input']},
        ]
      },
      {
        label: 'Info',
        items: [
          {label: 'Documentation', icon: 'pi pi-fw pi-id-card', routerLink: ['/']},
          ]
      },
    ];
  }
}
