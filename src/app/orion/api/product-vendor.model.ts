export class ProductVendor implements IProductVendor {
  /** Primary key. Foreign key to Product.ProductID. */
  productID!: number;
  /** Primary key. Foreign key to Vendor.BusinessEntityID. */
  businessEntityID!: number;
  /** The average span of time (in days) between placing an order with the vendor and receiving the purchased product. */
  averageLeadTime!: number;
  /** The vendor's usual selling price. */
  standardPrice!: number;
  /** The selling price when last purchased. */
  lastReceiptCost?: number | undefined;
  /** Date the product was last received by the vendor. */
  lastReceiptDate?: Date | undefined;
  /** The maximum quantity that should be ordered. */
  minOrderQty!: number;
  /** The minimum quantity that should be ordered. */
  maxOrderQty!: number;
  /** The quantity currently on order. */
  onOrderQty?: number | undefined;
  /** The product's unit of measure. */
  unitMeasureCode!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;
  vendor?: Vendor;
  unitMeasure?: UnitMeasure;

  constructor(data?: IProductVendor) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productID = _data["productID"];
      this.businessEntityID = _data["businessEntityID"];
      this.averageLeadTime = _data["averageLeadTime"];
      this.standardPrice = _data["standardPrice"];
      this.lastReceiptCost = _data["lastReceiptCost"];
      this.lastReceiptDate = _data["lastReceiptDate"] ? new Date(_data["lastReceiptDate"].toString()) : undefined as any;
      this.minOrderQty = _data["minOrderQty"];
      this.maxOrderQty = _data["maxOrderQty"];
      this.onOrderQty = _data["onOrderQty"];
      this.unitMeasureCode = _data["unitMeasureCode"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.product = _data["product"] ? Product.fromJS(_data["product"]) : undefined as any;
      this.vendor = _data["vendor"] ? Vendor.fromJS(_data["vendor"]) : undefined as any;
      this.unitMeasure = _data["unitMeasure"] ? UnitMeasure.fromJS(_data["unitMeasure"]) : undefined as any;
    }
  }

  static fromJS(data: any): ProductVendor {
    data = typeof data === 'object' ? data : {};
    let result = new ProductVendor();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productID"] = this.productID;
    data["businessEntityID"] = this.businessEntityID;
    data["averageLeadTime"] = this.averageLeadTime;
    data["standardPrice"] = this.standardPrice;
    data["lastReceiptCost"] = this.lastReceiptCost;
    data["lastReceiptDate"] = this.lastReceiptDate ? this.lastReceiptDate.toISOString() : undefined as any;
    data["minOrderQty"] = this.minOrderQty;
    data["maxOrderQty"] = this.maxOrderQty;
    data["onOrderQty"] = this.onOrderQty;
    data["unitMeasureCode"] = this.unitMeasureCode;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["product"] = this.product ? this.product.toJSON() : undefined as any;
    data["vendor"] = this.vendor ? this.vendor.toJSON() : undefined as any;
    data["unitMeasure"] = this.unitMeasure ? this.unitMeasure.toJSON() : undefined as any;
    return data;
  }
}

export interface IProductVendor {
  /** Primary key. Foreign key to Product.ProductID. */
  productID: number;
  /** Primary key. Foreign key to Vendor.BusinessEntityID. */
  businessEntityID: number;
  /** The average span of time (in days) between placing an order with the vendor and receiving the purchased product. */
  averageLeadTime: number;
  /** The vendor's usual selling price. */
  standardPrice: number;
  /** The selling price when last purchased. */
  lastReceiptCost?: number | undefined;
  /** Date the product was last received by the vendor. */
  lastReceiptDate?: Date | undefined;
  /** The maximum quantity that should be ordered. */
  minOrderQty: number;
  /** The minimum quantity that should be ordered. */
  maxOrderQty: number;
  /** The quantity currently on order. */
  onOrderQty?: number | undefined;
  /** The product's unit of measure. */
  unitMeasureCode: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
  vendor?: Vendor;
  unitMeasure?: UnitMeasure;
}
