import { createAction, props } from '@ngrx/store';

import {CartItem} from './cart.state';
import { Product } from '../../core/models/product';

export const addToCart = createAction(
  '[Cart] Add Item',
  props<{ product: Product; quantity?: number }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove Item',
  props<{ productId: number }>()
);

export const updateCartItemQuantity = createAction(
  '[Cart] Update Item Quantity',
  props<{ productId: number; quantity: number }>()
);

export const clearCart = createAction('[Cart] Clear Cart');

export const loadCart = createAction('[Cart] Load Cart');

export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ items: CartItem[] }>()
);
