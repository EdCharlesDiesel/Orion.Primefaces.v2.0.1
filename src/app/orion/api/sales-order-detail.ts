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

  constructor(data?: ISalesOrderDetail) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.salesOrderID = _data["salesOrderID"];
      this.salesOrderDetailID = _data["salesOrderDetailID"];
      this.carrierTrackingNumber = _data["carrierTrackingNumber"];
      this.orderQty = _data["orderQty"];
      this.productID = _data["productID"];
      this.specialOfferID = _data["specialOfferID"];
      this.unitPrice = _data["unitPrice"];
      this.unitPriceDiscount = _data["unitPriceDiscount"];
      this.lineTotal = _data["lineTotal"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.salesOrderHeader = _data["salesOrderHeader"] ? SalesOrderHeader.fromJS(_data["salesOrderHeader"]) : undefined as any;
      this.specialOfferProduct = _data["specialOfferProduct"] ? SpecialOfferProduct.fromJS(_data["specialOfferProduct"]) : undefined as any;
    }
  }

  static fromJS(data: any): SalesOrderDetail {
    data = typeof data === 'object' ? data : {};
    let result = new SalesOrderDetail();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["salesOrderID"] = this.salesOrderID;
    data["salesOrderDetailID"] = this.salesOrderDetailID;
    data["carrierTrackingNumber"] = this.carrierTrackingNumber;
    data["orderQty"] = this.orderQty;
    data["productID"] = this.productID;
    data["specialOfferID"] = this.specialOfferID;
    data["unitPrice"] = this.unitPrice;
    data["unitPriceDiscount"] = this.unitPriceDiscount;
    data["lineTotal"] = this.lineTotal;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["salesOrderHeader"] = this.salesOrderHeader ? this.salesOrderHeader.toJSON() : undefined as any;
    data["specialOfferProduct"] = this.specialOfferProduct ? this.specialOfferProduct.toJSON() : undefined as any;
    return data;
  }
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
