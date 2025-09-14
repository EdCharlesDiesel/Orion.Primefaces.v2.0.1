import {SalesTerritory} from "./sales-territory.model";
import {SalesTaxRate} from "./sales-tax-rate.model";

export class StateProvince implements IStateProvince {
  /** Primary key for StateProvince records. */
  stateProvinceID!: number;
  /** ISO standard state or province code. */
  stateProvinceCode!: string;
  /** ISO standard country or region code. Foreign key to CountryRegion.CountryRegionCode.  */
  countryRegionCode!: string;
  /** 0 = StateProvinceCode exists. 1 = StateProvinceCode unavailable, using CountryRegionCode. */
  isOnlyStateProvinceFlag!: boolean;
  /** State or province description. */
  name!: string;
  /** ID of the territory in which the state or province is located. Foreign key to SalesTerritory.SalesTerritoryID. */
  territoryID!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  countryRegion?: CountryRegion;
  salesTerritory?: SalesTerritory;
  addresses?: Address[] | undefined;
  salesTaxRates?: SalesTaxRate[] | undefined;

  constructor(data?: IStateProvince) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.stateProvinceID = _data["stateProvinceID"];
      this.stateProvinceCode = _data["stateProvinceCode"];
      this.countryRegionCode = _data["countryRegionCode"];
      this.isOnlyStateProvinceFlag = _data["isOnlyStateProvinceFlag"];
      this.name = _data["name"];
      this.territoryID = _data["territoryID"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.countryRegion = _data["countryRegion"] ? CountryRegion.fromJS(_data["countryRegion"]) : undefined as any;
      this.salesTerritory = _data["salesTerritory"] ? SalesTerritory.fromJS(_data["salesTerritory"]) : undefined as any;
      if (Array.isArray(_data["addresses"])) {
        this.addresses = [] as any;
        for (let item of _data["addresses"])
          this.addresses!.push(Address.fromJS(item));
      }
      if (Array.isArray(_data["salesTaxRates"])) {
        this.salesTaxRates = [] as any;
        for (let item of _data["salesTaxRates"])
          this.salesTaxRates!.push(SalesTaxRate.fromJS(item));
      }
    }
  }

  static fromJS(data: any): StateProvince {
    data = typeof data === 'object' ? data : {};
    let result = new StateProvince();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["stateProvinceID"] = this.stateProvinceID;
    data["stateProvinceCode"] = this.stateProvinceCode;
    data["countryRegionCode"] = this.countryRegionCode;
    data["isOnlyStateProvinceFlag"] = this.isOnlyStateProvinceFlag;
    data["name"] = this.name;
    data["territoryID"] = this.territoryID;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["countryRegion"] = this.countryRegion ? this.countryRegion.toJSON() : undefined as any;
    data["salesTerritory"] = this.salesTerritory ? this.salesTerritory.toJSON() : undefined as any;
    if (Array.isArray(this.addresses)) {
      data["addresses"] = [];
      for (let item of this.addresses)
        data["addresses"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.salesTaxRates)) {
      data["salesTaxRates"] = [];
      for (let item of this.salesTaxRates)
        data["salesTaxRates"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface IStateProvince {
  /** Primary key for StateProvince records. */
  stateProvinceID: number;
  /** ISO standard state or province code. */
  stateProvinceCode: string;
  /** ISO standard country or region code. Foreign key to CountryRegion.CountryRegionCode.  */
  countryRegionCode: string;
  /** 0 = StateProvinceCode exists. 1 = StateProvinceCode unavailable, using CountryRegionCode. */
  isOnlyStateProvinceFlag: boolean;
  /** State or province description. */
  name: string;
  /** ID of the territory in which the state or province is located. Foreign key to SalesTerritory.SalesTerritoryID. */
  territoryID: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  countryRegion?: CountryRegion;
  salesTerritory?: SalesTerritory;
  addresses?: Address[] | undefined;
  salesTaxRates?: SalesTaxRate[] | undefined;
}
