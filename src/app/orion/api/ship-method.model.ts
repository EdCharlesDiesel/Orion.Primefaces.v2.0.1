export class ShipMethod implements IShipMethod {
  /** Primary key for ShipMethod records. */
  shipMethodID!: number;
  /** Shipping company name. */
  name!: string;
  /** Minimum shipping charge. */
  shipBase!: number;
  /** Shipping charge per pound. */
  shipRate!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  purchaseOrderHeaders?: PurchaseOrderHeader[] | undefined;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;

  constructor(data?: IShipMethod) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.shipMethodID = _data["shipMethodID"];
      this.name = _data["name"];
      this.shipBase = _data["shipBase"];
      this.shipRate = _data["shipRate"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["purchaseOrderHeaders"])) {
        this.purchaseOrderHeaders = [] as any;
        for (let item of _data["purchaseOrderHeaders"])
          this.purchaseOrderHeaders!.push(PurchaseOrderHeader.fromJS(item));
      }
      if (Array.isArray(_data["salesOrderHeaders"])) {
        this.salesOrderHeaders = [] as any;
        for (let item of _data["salesOrderHeaders"])
          this.salesOrderHeaders!.push(SalesOrderHeader.fromJS(item));
      }
    }
  }

  static fromJS(data: any): ShipMethod {
    data = typeof data === 'object' ? data : {};
    let result = new ShipMethod();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["shipMethodID"] = this.shipMethodID;
    data["name"] = this.name;
    data["shipBase"] = this.shipBase;
    data["shipRate"] = this.shipRate;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.purchaseOrderHeaders)) {
      data["purchaseOrderHeaders"] = [];
      for (let item of this.purchaseOrderHeaders)
        data["purchaseOrderHeaders"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.salesOrderHeaders)) {
      data["salesOrderHeaders"] = [];
      for (let item of this.salesOrderHeaders)
        data["salesOrderHeaders"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface IShipMethod {
  /** Primary key for ShipMethod records. */
  shipMethodID: number;
  /** Shipping company name. */
  name: string;
  /** Minimum shipping charge. */
  shipBase: number;
  /** Shipping charge per pound. */
  shipRate: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  purchaseOrderHeaders?: PurchaseOrderHeader[] | undefined;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;
}
