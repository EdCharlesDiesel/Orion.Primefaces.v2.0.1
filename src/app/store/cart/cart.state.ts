import {Product} from '../../components/products/product.model';


export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export const initialCartState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};
