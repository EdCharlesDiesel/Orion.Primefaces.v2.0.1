import { Component } from '@angular/core';
import { NotificationsWidget } from '../../../pages/dashboard/components/notificationswidget';
import { StatsWidget } from '../../../pages/dashboard/components/statswidget';
import { RecentSalesWidget } from '../../../pages/dashboard/components/recentsaleswidget';
import { BestSellingWidget } from '../../../pages/dashboard/components/bestsellingwidget';
import { RevenueStreamWidget } from '../../../pages/dashboard/components/revenuestreamwidget';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
    template: `

    `
})
export class AdminDashboardComponent {}
