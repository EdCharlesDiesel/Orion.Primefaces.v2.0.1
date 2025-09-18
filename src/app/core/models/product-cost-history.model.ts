import {Product} from "./product";

export class ProductCostHistory {
  /** Product identification number. Foreign key to Product.ProductID */
  productID!: number;
  /** Product cost start date. */
  startDate!: Date;
  /** Product cost end date. */
  endDate?: Date | undefined;
  /** Standard cost of the product. */
  standardCost!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;

}

export interface IProductCostHistory {
  /** Product identification number. Foreign key to Product.ProductID */
  productID: number;
  /** Product cost start date. */
  startDate: Date;
  /** Product cost end date. */
  endDate?: Date | undefined;
  /** Standard cost of the product. */
  standardCost: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
}
