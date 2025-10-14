import { createAction, props } from '@ngrx/store';
import { Product } from '../../core/models/product';

// Load Products
export const loadProducts = createAction('[Products Page] Load Products');

export const loadProductsSuccess = createAction(
  '[Products API] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products API] Load Products Failure',
  props<{ error: string }>()
);

// Delete Product
export const deleteProduct = createAction(
  '[Products Page] Delete Product',
  props<{ id: number }>()
);

export const deleteProductSuccess = createAction(
  '[Products API] Delete Product Success',
  props<{ id: number }>()
);

export const deleteProductFailure = createAction(
  '[Products API] Delete Product Failure',
  props<{ error: string }>()
);

// Inventory Management Actions
export const updateProductQuantity = createAction(
  '[Products Page] Update Product Quantity',
  props<{ id: number; quantity: number }>()
);

export const decrementProductQuantity = createAction(
  '[Cart] Decrement Product Quantity',
  props<{ id: number; amount?: number }>()
);

export const incrementProductQuantity = createAction(
  '[Products Page] Increment Product Quantity',
  props<{ id: number; amount?: number }>()
);

export const setInitialQuantities = createAction(
  '[Products Page] Set Initial Quantities',
  props<{ quantities: { [productId: number]: number } }>()
);
