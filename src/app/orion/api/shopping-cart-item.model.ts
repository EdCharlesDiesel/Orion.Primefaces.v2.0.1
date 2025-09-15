import {Product} from "./product";

export class ShoppingCartItem {
  /** Primary key for ShoppingCartItem records. */
  shoppingCartItemID!: number;
  /** Shopping cart identification number. */
  shoppingCartID!: string;
  /** Product quantity ordered. */
  quantity!: number;
  /** Product ordered. Foreign key to Product.ProductID. */
  productID!: number;
  /** Date the time the record was created. */
  dateCreated!: Date;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;

}

export interface IShoppingCartItem {
  /** Primary key for ShoppingCartItem records. */
  shoppingCartItemID: number;
  /** Shopping cart identification number. */
  shoppingCartID: string;
  /** Product quantity ordered. */
  quantity: number;
  /** Product ordered. Foreign key to Product.ProductID. */
  productID: number;
  /** Date the time the record was created. */
  dateCreated: Date;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
}
