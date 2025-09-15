import {Product} from "./product";

export class ProductListPriceHistory implements IProductListPriceHistory {
  /** Product identification number. Foreign key to Product.ProductID */
  productID!: number;
  /** List price start date. */
  startDate!: Date;
  /** List price end date */
  endDate?: Date | undefined;
  /** Product list price. */
  listPrice!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;

}

export interface IProductListPriceHistory {
  /** Product identification number. Foreign key to Product.ProductID */
  productID: number;
  /** List price start date. */
  startDate: Date;
  /** List price end date */
  endDate?: Date | undefined;
  /** Product list price. */
  listPrice: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
}
