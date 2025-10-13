export interface Result<T> {
  data: T | undefined;
  error?: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };

  quantityInStock?: number; // Add this field
}
