import { Component } from '@angular/core';
import { CartTotalComponent } from '../cart-total/cart-total.component';
import { CartListComponent } from '../cart-list/cart-list.component';

@Component({
  standalone: true,
  imports: [CartListComponent],
  template: `
  <div class='row'>
    <app-cart-list/>
  </div>
  `
})
export class CartShellComponent {

}
