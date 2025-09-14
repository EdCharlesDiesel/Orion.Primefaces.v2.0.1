export class SpecialOfferProduct implements ISpecialOfferProduct {
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

  constructor(data?: ISpecialOfferProduct) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.specialOfferID = _data["specialOfferID"];
      this.productID = _data["productID"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.specialOffer = _data["specialOffer"] ? SpecialOffer.fromJS(_data["specialOffer"]) : undefined as any;
      this.product = _data["product"] ? Product.fromJS(_data["product"]) : undefined as any;
      if (Array.isArray(_data["salesOrderDetails"])) {
        this.salesOrderDetails = [] as any;
        for (let item of _data["salesOrderDetails"])
          this.salesOrderDetails!.push(SalesOrderDetail.fromJS(item));
      }
    }
  }

  static fromJS(data: any): SpecialOfferProduct {
    data = typeof data === 'object' ? data : {};
    let result = new SpecialOfferProduct();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["specialOfferID"] = this.specialOfferID;
    data["productID"] = this.productID;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["specialOffer"] = this.specialOffer ? this.specialOffer.toJSON() : undefined as any;
    data["product"] = this.product ? this.product.toJSON() : undefined as any;
    if (Array.isArray(this.salesOrderDetails)) {
      data["salesOrderDetails"] = [];
      for (let item of this.salesOrderDetails)
        data["salesOrderDetails"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
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
