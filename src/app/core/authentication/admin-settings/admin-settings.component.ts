import { Component } from '@angular/core';
import { StatsWidget } from '../../../pages/dashboard/components/statswidget';
import { RecentSalesWidget } from '../../../pages/dashboard/components/recentsaleswidget';
import { BestSellingWidget } from '../../../pages/dashboard/components/bestsellingwidget';
import { RevenueStreamWidget } from '../../../pages/dashboard/components/revenuestreamwidget';
import { NotificationsWidget } from '../../../pages/dashboard/components/notificationswidget';


@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
    template: `

    `
})
export class AdminSettingsComponent {}
