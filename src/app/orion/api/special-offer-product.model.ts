import {SalesOrderDetail} from "./sales-order-detail";
import {Product} from "./product";
import {SpecialOffer} from "./special-offer";

export class SpecialOfferProduct {
  /** Primary key for SpecialOfferProduct records. */
  specialOfferID!: number;
  /** Product identification number. Foreign key to Product.ProductID. */
  productID!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  specialOffer?: SpecialOffer;
  product?: Product;
  salesOrderDetails?: SalesOrderDetail[] | undefined;

}

export interface ISpecialOfferProduct {
  /** Primary key for SpecialOfferProduct records. */
  specialOfferID: number;
  /** Product identification number. Foreign key to Product.ProductID. */
  productID: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  specialOffer?: SpecialOffer;
  product?: Product;
  salesOrderDetails?: SalesOrderDetail[] | undefined;
}
