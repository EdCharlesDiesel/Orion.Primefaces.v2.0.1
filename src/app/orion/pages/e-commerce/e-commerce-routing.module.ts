import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'system-information',
      data: {breadcrumb: 'Button'},
      loadChildren: () => import('./system-information/system-information.module').then(m => m.SystemInformationModule)
    },
    {
      path: 'product-overview',
      data: {breadcrumb: 'Button'},
      loadChildren: () => import('./product-overview/product-overview.module').then(m => m.ProductOverviewModule)
    },
    {
      path: 'product-list',
      data: {breadcrumb: 'List'},
      loadChildren: () => import('./product-list/product-list-routing.module').then(m => m.ProductListRoutingModule)
    },
    {
      path: 'new-product',
      data: {breadcrumb: 'Charts'},
      loadChildren: () => import('./new-product/new-product-routing.module').then(m => m.NewProductRoutingModule)
    },
    {
      path: 'shopping-cart',
      data: {breadcrumb: 'Charts'},
      loadChildren: () => import('./shopping-cart/shopping-cart-routing.module').then(m => m.ShoppingCartRoutingModule)
    },
    {
      path: 'checkout',
      data: {breadcrumb: 'File'},
      loadChildren: () => import('./checkout/checkout-routing.module').then(m => m.CheckoutRoutingModule)
    },
    {
      path: 'shipment',
      data: {breadcrumb: 'Float Label'},
      loadChildren: () => import('./shopping-cart/shopping-cart-routing.module').then(m => m.ShoppingCartRoutingModule)
    },
    {
      path: 'order-history',
      data: {breadcrumb: 'Float Label'},
      loadChildren: () => import('./order-history/order-history-routing.module').then(m => m.OrderHistoryRoutingModule)
    },
    {
      path: 'order-summary',
      data: {breadcrumb: 'Form Layout'},
      loadChildren: () => import('./order-summary/order-summary.module').then(m => m.OrderSummaryModule)
    },
    {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class ECommerceRoutingModule {
}
