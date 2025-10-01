import { Component } from '@angular/core';
import { NotificationsWidget } from '../notificationswidget';
import { StatsWidget } from '../statswidget';
import { RecentSalesWidget } from '../recentsaleswidget';
import { BestSellingWidget } from '../bestsellingwidget';
import { RevenueStreamWidget } from '../revenuestreamwidget';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
    template: `
<p>vxcvcvxcvxc</p>
    `
})
export class DashboardComponent {}
