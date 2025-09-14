import {StateProvince} from "./state-province.model";

export class SalesTaxRate implements ISalesTaxRate {
  /** Primary key for SalesTaxRate records. */
  salesTaxRateID!: number;
  /** State, province, or country/region the sales tax applies to. */
  stateProvinceID!: number;
  /** 1 = Tax applied to retail transactions, 2 = Tax applied to wholesale transactions, 3 = Tax applied to all sales (retail and wholesale) transactions. */
  taxType!: number;
  /** Tax rate amount. */
  taxRate!: number;
  /** Tax rate description. */
  name!: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  stateProvince?: StateProvince;

  constructor(data?: ISalesTaxRate) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.salesTaxRateID = _data["salesTaxRateID"];
      this.stateProvinceID = _data["stateProvinceID"];
      this.taxType = _data["taxType"];
      this.taxRate = _data["taxRate"];
      this.name = _data["name"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.stateProvince = _data["stateProvince"] ? StateProvince.fromJS(_data["stateProvince"]) : undefined as any;
    }
  }

  static fromJS(data: any): SalesTaxRate {
    data = typeof data === 'object' ? data : {};
    let result = new SalesTaxRate();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["salesTaxRateID"] = this.salesTaxRateID;
    data["stateProvinceID"] = this.stateProvinceID;
    data["taxType"] = this.taxType;
    data["taxRate"] = this.taxRate;
    data["name"] = this.name;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["stateProvince"] = this.stateProvince ? this.stateProvince.toJSON() : undefined as any;
    return data;
  }
}

export interface ISalesTaxRate {
  /** Primary key for SalesTaxRate records. */
  salesTaxRateID: number;
  /** State, province, or country/region the sales tax applies to. */
  stateProvinceID: number;
  /** 1 = Tax applied to retail transactions, 2 = Tax applied to wholesale transactions, 3 = Tax applied to all sales (retail and wholesale) transactions. */
  taxType: number;
  /** Tax rate amount. */
  taxRate: number;
  /** Tax rate description. */
  name: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  stateProvince?: StateProvince;
}
