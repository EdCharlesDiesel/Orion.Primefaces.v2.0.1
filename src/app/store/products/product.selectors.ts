import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

export const selectProductsLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.isLoading
);

export const selectProductsError = createSelector(
  selectProductState,
  (state: ProductState) => state.error
);

// New selectors for inventory
export const selectProductById = (id: number) => createSelector(
  selectAllProducts,
  (products) => products.find(product => product.id === id)
);

export const selectProductQuantity = (id: number) => createSelector(
  selectProductById(id),
  (product) => product?.quantityInStock ?? 0
);

export const selectProductsInStock = createSelector(
  selectAllProducts,
  (products) => products.filter(product => (product.quantityInStock ?? 0) > 0)
);

export const selectProductsOutOfStock = createSelector(
  selectAllProducts,
  (products) => products.filter(product => (product.quantityInStock ?? 0) === 0)
);

export const selectTotalInventoryCount = createSelector(
  selectAllProducts,
  (products) => products.reduce((total, product) =>
    total + (product.quantityInStock ?? 0), 0
  )
);

// Combined view model selector
export const selectProductsViewModel = createSelector(
  selectAllProducts,
  selectProductsLoading,
  selectProductsError,
  selectTotalInventoryCount,
  (products, isLoading, error, totalInventory) => ({
    products,
    isLoading,
    error,
    totalInventory
  })
);
