import {PurchaseOrderHeader} from "./purchase-order-header.model";
import {Product} from "./product";

export class PurchaseOrderDetail implements IPurchaseOrderDetail {
  /** Primary key. Foreign key to PurchaseOrderHeader.PurchaseOrderID. */
  purchaseOrderID!: number;
  /** Primary key. One line number per purchased product. */
  purchaseOrderDetailID!: number;
  /** Date the product is expected to be received. */
  dueDate!: Date;
  /** Quantity ordered. */
  orderQty!: number;
  /** Product identification number. Foreign key to Product.ProductID. */
  productID!: number;
  /** Vendor's selling price of a single product. */
  unitPrice!: number;
  /** Per product subtotal. Computed as OrderQty * UnitPrice. */
  lineTotal!: number;
  /** Quantity actually received from the vendor. */
  receivedQty!: number;
  /** Quantity rejected during inspection. */
  rejectedQty!: number;
  /** Quantity accepted into inventory. Computed as ReceivedQty - RejectedQty. */
  stockedQty!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  purchaseOrderHeader?: PurchaseOrderHeader;
  product?: Product;

}

export interface IPurchaseOrderDetail {
  /** Primary key. Foreign key to PurchaseOrderHeader.PurchaseOrderID. */
  purchaseOrderID: number;
  /** Primary key. One line number per purchased product. */
  purchaseOrderDetailID: number;
  /** Date the product is expected to be received. */
  dueDate: Date;
  /** Quantity ordered. */
  orderQty: number;
  /** Product identification number. Foreign key to Product.ProductID. */
  productID: number;
  /** Vendor's selling price of a single product. */
  unitPrice: number;
  /** Per product subtotal. Computed as OrderQty * UnitPrice. */
  lineTotal: number;
  /** Quantity actually received from the vendor. */
  receivedQty: number;
  /** Quantity rejected during inspection. */
  rejectedQty: number;
  /** Quantity accepted into inventory. Computed as ReceivedQty - RejectedQty. */
  stockedQty: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  purchaseOrderHeader?: PurchaseOrderHeader;
  product?: Product;
}
