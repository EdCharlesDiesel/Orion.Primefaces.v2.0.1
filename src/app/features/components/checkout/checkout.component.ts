import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import {CurrencyPipe} from '@angular/common';
import {MatFormField} from '@angular/material/form-field';
import {MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {CartService} from '../../services/cart.service';
import {CartState} from '../../store/cart/cart.state';
import {selectCartState} from '../../store/cart/cart.selectors';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  imports: [
    MatIcon,
    MatCardActions,
    MatDivider,
    CurrencyPipe,
    MatCard,
    MatCardHeader,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatCardTitle,
    MatInput,
    MatButton,
    RouterLink
  ],
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  private store = inject(Store);
  shippingForm!: FormGroup;
  private cartService = inject(CartService);
  vm$: Observable<CartState> = this.store.select(selectCartState);
  subtotal = this.getTotalPrice();
  tax = this.subtotal * 0.15;
  total = this.subtotal + this.tax;


  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.shippingForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required]
    });
  }

  placeOrder(): void {
    if (this.shippingForm.valid) {
      console.log('Order placed:', this.shippingForm.value);
      // Navigate to order confirmation
      this.router.navigate(['/order-confirmation']);
    } else {
      this.shippingForm.markAllAsTouched();
    }
  }

  // Optional: helper for snackbar or logs
  getTotalPrice(): number {
    let total = 0;
    this.vm$.subscribe(vm => total = vm.totalPrice).unsubscribe();
    return Number(total); // ensure it's a number
  }
}
