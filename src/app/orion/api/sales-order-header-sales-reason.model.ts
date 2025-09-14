import {SalesReason} from "./sales-reason.model";
import {SalesOrderHeader} from "./sale-order-header.model";

export class SalesOrderHeaderSalesReason implements ISalesOrderHeaderSalesReason {
  /** Primary key. Foreign key to SalesOrderHeader.SalesOrderID. */
  salesOrderID!: number;
  /** Primary key. Foreign key to SalesReason.SalesReasonID. */
  salesReasonID!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  salesOrderHeader?: SalesOrderHeader;
  salesReason?: SalesReason;

  constructor(data?: ISalesOrderHeaderSalesReason) {
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
      this.salesReasonID = _data["salesReasonID"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.salesOrderHeader = _data["salesOrderHeader"] ? SalesOrderHeader.fromJS(_data["salesOrderHeader"]) : undefined as any;
      this.salesReason = _data["salesReason"] ? SalesReason.fromJS(_data["salesReason"]) : undefined as any;
    }
  }

  static fromJS(data: any): SalesOrderHeaderSalesReason {
    data = typeof data === 'object' ? data : {};
    let result = new SalesOrderHeaderSalesReason();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["salesOrderID"] = this.salesOrderID;
    data["salesReasonID"] = this.salesReasonID;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["salesOrderHeader"] = this.salesOrderHeader ? this.salesOrderHeader.toJSON() : undefined as any;
    data["salesReason"] = this.salesReason ? this.salesReason.toJSON() : undefined as any;
    return data;
  }
}

export interface ISalesOrderHeaderSalesReason {
  /** Primary key. Foreign key to SalesOrderHeader.SalesOrderID. */
  salesOrderID: number;
  /** Primary key. Foreign key to SalesReason.SalesReasonID. */
  salesReasonID: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  salesOrderHeader?: SalesOrderHeader;
  salesReason?: SalesReason;
}
