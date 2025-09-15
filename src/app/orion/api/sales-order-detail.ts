import {SpecialOfferProduct} from "./special-offer-product.model";
import {SalesOrderHeader} from "./sale-order-header.model";

export class SalesOrderDetail implements ISalesOrderDetail {
  /** Primary key. Foreign key to SalesOrderHeader.SalesOrderID. */
  salesOrderID!: number;
  /** Primary key. One incremental unique number per product sold. */
  salesOrderDetailID!: number;
  /** Shipment tracking number supplied by the shipper. */
  carrierTrackingNumber?: string | undefined;
  /** Quantity ordered per product. */
  orderQty!: number;
  /** Product sold to customer. Foreign key to Product.ProductID. */
  productID!: number;
  /** Promotional code. Foreign key to SpecialOffer.SpecialOfferID. */
  specialOfferID!: number;
  /** Selling price of a single product. */
  unitPrice!: number;
  /** Discount amount. */
  unitPriceDiscount!: number;
  /** Per product subtotal. Computed as UnitPrice * (1 - UnitPriceDiscount) * OrderQty. */
  lineTotal!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  salesOrderHeader?: SalesOrderHeader;
  specialOfferProduct?: SpecialOfferProduct;

}

export interface ISalesOrderDetail {
  /** Primary key. Foreign key to SalesOrderHeader.SalesOrderID. */
  salesOrderID: number;
  /** Primary key. One incremental unique number per product sold. */
  salesOrderDetailID: number;
  /** Shipment tracking number supplied by the shipper. */
  carrierTrackingNumber?: string | undefined;
  /** Quantity ordered per product. */
  orderQty: number;
  /** Product sold to customer. Foreign key to Product.ProductID. */
  productID: number;
  /** Promotional code. Foreign key to SpecialOffer.SpecialOfferID. */
  specialOfferID: number;
  /** Selling price of a single product. */
  unitPrice: number;
  /** Discount amount. */
  unitPriceDiscount: number;
  /** Per product subtotal. Computed as UnitPrice * (1 - UnitPriceDiscount) * OrderQty. */
  lineTotal: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  salesOrderHeader?: SalesOrderHeader;
  specialOfferProduct?: SpecialOfferProduct;
}
