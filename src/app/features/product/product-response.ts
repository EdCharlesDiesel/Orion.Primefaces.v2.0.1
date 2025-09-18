import { Product } from '../../api/product';

export interface ProductResponse {
    total: number;
    books: Product[];
}
