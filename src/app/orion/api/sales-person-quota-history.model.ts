export class SalesPersonQuotaHistory implements ISalesPersonQuotaHistory {
  /** Sales person identification number. Foreign key to SalesPerson.BusinessEntityID. */
  businessEntityID!: number;
  /** Sales quota date. */
  quotaDate!: Date;
  /** Sales quota amount. */
  salesQuota!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  salesPerson?: SalesPerson;

  constructor(data?: ISalesPersonQuotaHistory) {
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
      this.quotaDate = _data["quotaDate"] ? new Date(_data["quotaDate"].toString()) : undefined as any;
      this.salesQuota = _data["salesQuota"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.salesPerson = _data["salesPerson"] ? SalesPerson.fromJS(_data["salesPerson"]) : undefined as any;
    }
  }

  static fromJS(data: any): SalesPersonQuotaHistory {
    data = typeof data === 'object' ? data : {};
    let result = new SalesPersonQuotaHistory();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["businessEntityID"] = this.businessEntityID;
    data["quotaDate"] = this.quotaDate ? this.quotaDate.toISOString() : undefined as any;
    data["salesQuota"] = this.salesQuota;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["salesPerson"] = this.salesPerson ? this.salesPerson.toJSON() : undefined as any;
    return data;
  }
}

export interface ISalesPersonQuotaHistory {
  /** Sales person identification number. Foreign key to SalesPerson.BusinessEntityID. */
  businessEntityID: number;
  /** Sales quota date. */
  quotaDate: Date;
  /** Sales quota amount. */
  salesQuota: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  salesPerson?: SalesPerson;
}
