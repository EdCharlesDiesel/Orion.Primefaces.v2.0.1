import { Component } from '@angular/core';
import { StatsWidget } from '../admin/dashboard/components/statswidget';
import { RecentSalesWidget } from '../admin/dashboard/components/recentsaleswidget';
import { BestSellingWidget } from '../admin/dashboard/components/bestsellingwidget';
import { RevenueStreamWidget } from '../admin/dashboard/components/revenuestreamwidget';
import { NotificationsWidget } from '../admin/dashboard/components/notificationswidget';
@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
    templateUrl:'admin.page.component.html'
})
export class AdminPageComponent {}
