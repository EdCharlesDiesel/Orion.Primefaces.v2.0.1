import {ProductVendor} from "./product-vendor.model";
import {PurchaseOrderHeader} from "./purchase-order-header.model";

export class Vendor implements IVendor {
  /** Primary key for Vendor records.  Foreign key to BusinessEntity.BusinessEntityID */
  businessEntityID!: number;
  /** Vendor account (identification) number. */
  accountNumber!: string;
  /** Company name. */
  name!: string;
  /** 1 = Superior, 2 = Excellent, 3 = Above average, 4 = Average, 5 = Below average */
  creditRating!: number;
  /** 0 = Do not use if another vendor is available. 1 = Preferred over other vendors supplying the same product. */
  preferredVendorStatus!: boolean;
  /** 0 = Vendor no longer used. 1 = Vendor is actively used. */
  activeFlag!: boolean;
  /** Vendor URL. */
  purchasingWebServiceURL?: string | undefined;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  businessEntity?: BusinessEntity;
  productVendors?: ProductVendor[] | undefined;
  purchaseOrderHeaders?: PurchaseOrderHeader[] | undefined;

  constructor(data?: IVendor) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.businessEntityID = _data["businessEntityID"];
      this.accountNumber = _data["accountNumber"];
      this.name = _data["name"];
      this.creditRating = _data["creditRating"];
      this.preferredVendorStatus = _data["preferredVendorStatus"];
      this.activeFlag = _data["activeFlag"];
      this.purchasingWebServiceURL = _data["purchasingWebServiceURL"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.businessEntity = _data["businessEntity"] ? BusinessEntity.fromJS(_data["businessEntity"]) : undefined as any;
      if (Array.isArray(_data["productVendors"])) {
        this.productVendors = [] as any;
        for (let item of _data["productVendors"])
          this.productVendors!.push(ProductVendor.fromJS(item));
      }
      if (Array.isArray(_data["purchaseOrderHeaders"])) {
        this.purchaseOrderHeaders = [] as any;
        for (let item of _data["purchaseOrderHeaders"])
          this.purchaseOrderHeaders!.push(PurchaseOrderHeader.fromJS(item));
      }
    }
  }

  static fromJS(data: any): Vendor {
    data = typeof data === 'object' ? data : {};
    let result = new Vendor();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["businessEntityID"] = this.businessEntityID;
    data["accountNumber"] = this.accountNumber;
    data["name"] = this.name;
    data["creditRating"] = this.creditRating;
    data["preferredVendorStatus"] = this.preferredVendorStatus;
    data["activeFlag"] = this.activeFlag;
    data["purchasingWebServiceURL"] = this.purchasingWebServiceURL;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["businessEntity"] = this.businessEntity ? this.businessEntity.toJSON() : undefined as any;
    if (Array.isArray(this.productVendors)) {
      data["productVendors"] = [];
      for (let item of this.productVendors)
        data["productVendors"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.purchaseOrderHeaders)) {
      data["purchaseOrderHeaders"] = [];
      for (let item of this.purchaseOrderHeaders)
        data["purchaseOrderHeaders"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface IVendor {
  /** Primary key for Vendor records.  Foreign key to BusinessEntity.BusinessEntityID */
  businessEntityID: number;
  /** Vendor account (identification) number. */
  accountNumber: string;
  /** Company name. */
  name: string;
  /** 1 = Superior, 2 = Excellent, 3 = Above average, 4 = Average, 5 = Below average */
  creditRating: number;
  /** 0 = Do not use if another vendor is available. 1 = Preferred over other vendors supplying the same product. */
  preferredVendorStatus: boolean;
  /** 0 = Vendor no longer used. 1 = Vendor is actively used. */
  activeFlag: boolean;
  /** Vendor URL. */
  purchasingWebServiceURL?: string | undefined;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  businessEntity?: BusinessEntity;
  productVendors?: ProductVendor[] | undefined;
  purchaseOrderHeaders?: PurchaseOrderHeader[] | undefined;
}
