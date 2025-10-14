import { Product } from '../../core/models/product';

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

export const initialProductState: ProductState = {
  products: [],
  isLoading: false,
  error: null
};

