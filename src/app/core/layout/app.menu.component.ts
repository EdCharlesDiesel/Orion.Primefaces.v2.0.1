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

          {label: 'System-Information', icon: 'pi pi-fw pi-compass', routerLink: ['/admin/system-information']},
        ]
      },
      {
        label: 'Admin',
        items: [
          {label: 'System-Information', icon: 'pi pi-fw pi-compass', routerLink: ['/admin/system-information']},
          {label: 'Error Logs', icon: 'pi pi-fw pi-filter', routerLink: ['/admin/error-log']},
          {label: 'Database Logs', icon: 'pi pi-fw pi-database', routerLink: ['/admin/database-log']},
          {
            label: 'Transaction History Archive',
            icon: 'pi pi-fw pi-times',
            routerLink: ['/admin/transaction-history-archive']
          }
        ]
      },
      {
        label: 'Human Resources',
        items: [
          {label: 'Departments', icon: 'pi pi-fw pi-compass', routerLink: ['/human-resources/departments']},
          {
            label: 'Employee Department History',
            icon: 'pi pi-fw pi-filter',
            routerLink: ['/human-resources/employee-department-history']
          },
          {
            label: 'Employee Pay History',
            icon: 'pi pi-fw pi-database',
            routerLink: ['/human-resources/employee-pay-history']
          },
          {
            label: 'Internal Employees',
            icon: 'pi pi-fw pi-compass',
            routerLink: ['/human-resources/internal-employees']
          },
          {label: 'External Employees', icon: 'pi pi-fw pi-times', routerLink: ['/human-resources/external-employees']},
          {label: 'Job Candidate', icon: 'pi pi-fw pi-database', routerLink: ['/human-resources/job-candidate']},
          {label: 'Shifts', icon: 'pi pi-fw pi-times', routerLink: ['/human-resources/shifts']},
        ]
      },
      {
        label: 'Persons',
        items: [
          {label: 'Address', icon: 'pi pi-fw pi-home', routerLink: ['person/address']},
          {label: 'Address Type', icon: 'pi pi-fw pi-directions', routerLink: ['person/addressType']},
          {label: 'Business Entity', icon: 'pi pi-fw pi-directions', routerLink: ['person/addressType']},
          {label: 'Business Entity Address', icon: 'pi pi-fw pi-directions', routerLink: ['person/addressType']},
          {label: 'Business Entity Contact', icon: 'pi pi-fw pi-directions', routerLink: ['person/addressType']},
          {label: 'Contact Type', icon: 'pi pi-fw pi-directions', routerLink: ['person/addressType']},
          {label: 'Country Region', icon: 'pi pi-fw pi-directions', routerLink: ['person/addressType']},
          {label: 'Email Address', icon: 'pi pi-fw pi-directions', routerLink: ['person/addressType']},
          {label: 'Password', icon: 'pi pi-fw pi-directions', routerLink: ['person/addressType']},
          {label: 'Person', icon: 'pi pi-fw pi-directions', routerLink: ['person/addressType']},
          {label: 'Person Phone', icon: 'pi pi-fw pi-directions', routerLink: ['person/addressType']},
          {label: 'Phone Number Type', icon: 'pi pi-fw pi-directions', routerLink: ['person/addressType']},

        ]
      },
      {
        label: 'Apps',
        items: [
          {label: 'Blog', icon: 'pi pi-fw pi-comment', routerLink: ['/apps/blog']},
          {label: 'Chat', icon: 'pi pi-fw pi-comments', routerLink: ['/apps/calendar']},
          {label: 'Reports', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/apps/reports']},
          {label: 'Files', icon: 'pi pi-fw pi-file', routerLink: ['/apps/files']},
          {label: 'Mail', icon: 'pi pi-fw pi-inbox', routerLink: ['/apps/mail']},
          {label: 'Task List', icon: 'pi pi-fw pi-check-square', routerLink: ['/apps/task-list']},
        ]
      },
      {
        label: 'E-Commerce',
        items: [
          {label: 'Product Overview', icon: 'pi pi-fw pi-image', routerLink: ['/e-commerce/product-overview']},
          {label: 'Product List', icon: 'pi pi-fw pi-list', routerLink: ['/e-commerce/product-list']},
          {label: 'New Product', icon: 'pi pi-fw pi-plus', routerLink: ['/e-commerce/new-product']},
          {label: 'Shopping Cart', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/e-commerce/shopping-cart']},
          {label: 'Checkout', icon: 'pi pi-fw pi-check-square', routerLink: ['/e-commerce/checkout']},
          {label: 'Shipment', icon: 'pi pi-fw pi-car', routerLink: ['/e-commerce/shipment']},
          {label: 'Order History', icon: 'pi pi-fw pi-history', routerLink: ['/e-commerce/order-history']},
          {label: 'Order Summary', icon: 'pi pi-fw pi-file', routerLink: ['/e-commerce/order-summary']},
        ]
      },
      {
        label: 'User Management',
        items: [
          {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/user-management/list-users']},
          {label: 'Create', icon: 'pi pi-fw pi-plus', routerLink: ['/user-management/add-users']},
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
