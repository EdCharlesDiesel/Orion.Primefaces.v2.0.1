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

  constructor(data?: ITransactionHistory) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.transactionID = _data["transactionID"];
      this.productID = _data["productID"];
      this.referenceOrderID = _data["referenceOrderID"];
      this.referenceOrderLineID = _data["referenceOrderLineID"];
      this.transactionDate = _data["transactionDate"] ? new Date(_data["transactionDate"].toString()) : undefined as any;
      this.transactionType = _data["transactionType"];
      this.quantity = _data["quantity"];
      this.actualCost = _data["actualCost"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.product = _data["product"] ? Product.fromJS(_data["product"]) : undefined as any;
    }
  }

  static fromJS(data: any): TransactionHistory {
    data = typeof data === 'object' ? data : {};
    let result = new TransactionHistory();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["transactionID"] = this.transactionID;
    data["productID"] = this.productID;
    data["referenceOrderID"] = this.referenceOrderID;
    data["referenceOrderLineID"] = this.referenceOrderLineID;
    data["transactionDate"] = this.transactionDate ? this.transactionDate.toISOString() : undefined as any;
    data["transactionType"] = this.transactionType;
    data["quantity"] = this.quantity;
    data["actualCost"] = this.actualCost;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["product"] = this.product ? this.product.toJSON() : undefined as any;
    return data;
  }
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
