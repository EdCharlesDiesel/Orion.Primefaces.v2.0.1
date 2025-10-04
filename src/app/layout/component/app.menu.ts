import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'E-Commerce',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/E-Commerce'],
                items: [
                    {
                        label: 'Products',
                        icon: 'pi pi-fw pi-',
                        routerLink: ['/human-resources/departments']
                    },
                    {
                        label: 'Today Special',
                        icon: 'pi pi-fw pi-bookmark',
                        routerLink: ['/human-resources/departments']
                    }
                ]
            },
            {
                label: 'E-Commerce-Admin',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/human-resources'],
                items: [
                    {
                        label: 'Human Resources',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Departments',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/human-resources/departments']
                            },
                            {
                                label: 'Employee Department History',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/human-resources/employee-department-history']
                            },
                            {
                                label: 'Employee Pay History',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/human-resources/employee-pay-history']
                            },
                            {
                                label: 'Internal Employees',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/human-resources/internal-employees']
                            },
                            {
                                label: 'External Employees',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/human-resources/external-employees']
                            },
                            {
                                label: 'Job-Candidates',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/human-resources/job-candidate']
                            },
                            {
                                label: 'Shifts',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/human-resources/shifts']
                            }
                        ]
                    },
                    {
                        label: 'Person',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Addresses',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/person/addresses']
                            },
                            {
                                label: 'Address Type',
                                icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/person/address-type']
                            }
                        ]
                    }
                ]
            },
            {
                label: 'UI Components',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Button', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/button'] },
                    { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/timeline'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/pages/notfound']
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    }
                ]
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/documentation']
                    },
                    {
                        label: 'View Source',
                        icon: 'pi pi-fw pi-github',
                        url: 'https://github.com/primefaces/sakai-ng',
                        target: '_blank'
                    }
                ]
            }
        ];
    }
}
