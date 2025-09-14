import {PurchaseOrderHeader} from "./purchase-order-header.model";

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

  constructor(data?: IPurchaseOrderDetail) {
    if (data) {
      for (let property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.purchaseOrderID = _data["purchaseOrderID"];
      this.purchaseOrderDetailID = _data["purchaseOrderDetailID"];
      this.dueDate = _data["dueDate"] ? new Date(_data["dueDate"].toString()) : undefined as any;
      this.orderQty = _data["orderQty"];
      this.productID = _data["productID"];
      this.unitPrice = _data["unitPrice"];
      this.lineTotal = _data["lineTotal"];
      this.receivedQty = _data["receivedQty"];
      this.rejectedQty = _data["rejectedQty"];
      this.stockedQty = _data["stockedQty"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.purchaseOrderHeader = _data["purchaseOrderHeader"] ? PurchaseOrderHeader.fromJS(_data["purchaseOrderHeader"]) : undefined as any;
      this.product = _data["product"] ? Product.fromJS(_data["product"]) : undefined as any;
    }
  }

  static fromJS(data: any): PurchaseOrderDetail {
    data = typeof data === 'object' ? data : {};
    let result = new PurchaseOrderDetail();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["purchaseOrderID"] = this.purchaseOrderID;
    data["purchaseOrderDetailID"] = this.purchaseOrderDetailID;
    data["dueDate"] = this.dueDate ? this.dueDate.toISOString() : undefined as any;
    data["orderQty"] = this.orderQty;
    data["productID"] = this.productID;
    data["unitPrice"] = this.unitPrice;
    data["lineTotal"] = this.lineTotal;
    data["receivedQty"] = this.receivedQty;
    data["rejectedQty"] = this.rejectedQty;
    data["stockedQty"] = this.stockedQty;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["purchaseOrderHeader"] = this.purchaseOrderHeader ? this.purchaseOrderHeader.toJSON() : undefined as any;
    data["product"] = this.product ? this.product.toJSON() : undefined as any;
    return data;
  }
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
