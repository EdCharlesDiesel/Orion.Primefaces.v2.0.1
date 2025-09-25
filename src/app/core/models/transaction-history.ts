import {Product} from "./product";

export class TransactionHistory implements ITransactionHistory {
  /** Primary key for TransactionHistory records. */
  transactionID!: number;
  /** Product identification number. Foreign key to Product.ProductID. */
  productID!: number;
  /** Purchase order, sales order, or work order identification number. */
  referenceOrderID!: number;
  /** Line number associated with the purchase order, sales order, or work order. */
  referenceOrderLineID!: number;
  /** Date and time of the transaction. */
  transactionDate!: Date;
  /** W = WorkOrder, S = SalesOrder, P = PurchaseOrder */
  transactionType!: string;
  /** Product quantity. */
  quantity!: number;
  /** Product cost. */
  actualCost!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;

}

export interface ITransactionHistory {
  /** Primary key for TransactionHistory records. */
  transactionID: number;
  /** Product identification number. Foreign key to Product.ProductID. */
  productID: number;
  /** Purchase order, sales order, or work order identification number. */
  referenceOrderID: number;
  /** Line number associated with the purchase order, sales order, or work order. */
  referenceOrderLineID: number;
  /** Date and time of the transaction. */
  transactionDate: Date;
  /** W = WorkOrder, S = SalesOrder, P = PurchaseOrder */
  transactionType: string;
  /** Product quantity. */
  quantity: number;
  /** Product cost. */
  actualCost: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
}
