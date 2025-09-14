import {SalesOrderHeaderSalesReason} from "./sales-order-header-sales-reason.model";

export class SalesReason implements ISalesReason {
  /** Primary key for SalesReason records. */
  salesReasonID!: number;
  /** Sales reason description. */
  name!: string;
  /** Category the sales reason belongs to. */
  reasonType!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  salesOrderHeaderSalesReasons?: SalesOrderHeaderSalesReason[] | undefined;

  constructor(data?: ISalesReason) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.salesReasonID = _data["salesReasonID"];
      this.name = _data["name"];
      this.reasonType = _data["reasonType"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["salesOrderHeaderSalesReasons"])) {
        this.salesOrderHeaderSalesReasons = [] as any;
        for (let item of _data["salesOrderHeaderSalesReasons"])
          this.salesOrderHeaderSalesReasons!.push(SalesOrderHeaderSalesReason.fromJS(item));
      }
    }
  }

  static fromJS(data: any): SalesReason {
    data = typeof data === 'object' ? data : {};
    let result = new SalesReason();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["salesReasonID"] = this.salesReasonID;
    data["name"] = this.name;
    data["reasonType"] = this.reasonType;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.salesOrderHeaderSalesReasons)) {
      data["salesOrderHeaderSalesReasons"] = [];
      for (let item of this.salesOrderHeaderSalesReasons)
        data["salesOrderHeaderSalesReasons"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface ISalesReason {
  /** Primary key for SalesReason records. */
  salesReasonID: number;
  /** Sales reason description. */
  name: string;
  /** Category the sales reason belongs to. */
  reasonType: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  salesOrderHeaderSalesReasons?: SalesOrderHeaderSalesReason[] | undefined;
}
