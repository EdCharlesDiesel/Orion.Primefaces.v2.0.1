import {ProductVendor} from "./product-vendor.model";
import {PurchaseOrderHeader} from "./purchase-order-header.model";
import {BusinessEntity} from "./business-entity.model";

export class Vendor  {
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
