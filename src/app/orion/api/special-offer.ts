import {SpecialOfferProduct} from "./special-offer-product.model";

export class SpecialOffer implements ISpecialOffer {
  /** Primary key for SpecialOffer records. */
  specialOfferID!: number;
  /** Discount description. */
  description!: string;
  /** Discount precentage. */
  discountPct!: number;
  /** Discount type category. */
  type!: string;
  /** Group the discount applies to such as Reseller or Customer. */
  category!: string;
  /** Discount start date. */
  startDate!: Date;
  /** Discount end date. */
  endDate!: Date;
  /** Minimum discount percent allowed. */
  minQty!: number;
  /** Maximum discount percent allowed. */
  maxQty?: number | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  specialOfferProducts?: SpecialOfferProduct[] | undefined;

  constructor(data?: ISpecialOffer) {
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
      this.description = _data["description"];
      this.discountPct = _data["discountPct"];
      this.type = _data["type"];
      this.category = _data["category"];
      this.startDate = _data["startDate"] ? new Date(_data["startDate"].toString()) : undefined as any;
      this.endDate = _data["endDate"] ? new Date(_data["endDate"].toString()) : undefined as any;
      this.minQty = _data["minQty"];
      this.maxQty = _data["maxQty"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["specialOfferProducts"])) {
        this.specialOfferProducts = [] as any;
        for (let item of _data["specialOfferProducts"])
          this.specialOfferProducts!.push(SpecialOfferProduct.fromJS(item));
      }
    }
  }

  static fromJS(data: any): SpecialOffer {
    data = typeof data === 'object' ? data : {};
    let result = new SpecialOffer();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["specialOfferID"] = this.specialOfferID;
    data["description"] = this.description;
    data["discountPct"] = this.discountPct;
    data["type"] = this.type;
    data["category"] = this.category;
    data["startDate"] = this.startDate ? this.startDate.toISOString() : undefined as any;
    data["endDate"] = this.endDate ? this.endDate.toISOString() : undefined as any;
    data["minQty"] = this.minQty;
    data["maxQty"] = this.maxQty;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.specialOfferProducts)) {
      data["specialOfferProducts"] = [];
      for (let item of this.specialOfferProducts)
        data["specialOfferProducts"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface ISpecialOffer {
  /** Primary key for SpecialOffer records. */
  specialOfferID: number;
  /** Discount description. */
  description: string;
  /** Discount precentage. */
  discountPct: number;
  /** Discount type category. */
  type: string;
  /** Group the discount applies to such as Reseller or Customer. */
  category: string;
  /** Discount start date. */
  startDate: Date;
  /** Discount end date. */
  endDate: Date;
  /** Minimum discount percent allowed. */
  minQty: number;
  /** Maximum discount percent allowed. */
  maxQty?: number | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  specialOfferProducts?: SpecialOfferProduct[] | undefined;
}
