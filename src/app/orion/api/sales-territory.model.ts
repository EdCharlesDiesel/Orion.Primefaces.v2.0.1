import {SalesTerritoryHistory} from "./sales-territory-history.model";
import {Customer} from "./customer";
import {StateProvince} from "./state-province.model";

export class SalesTerritory implements ISalesTerritory {
  /** Primary key for SalesTerritory records. */
  territoryID!: number;
  /** Sales territory description */
  name!: string;
  /** ISO standard country or region code. Foreign key to CountryRegion.CountryRegionCode.  */
  countryRegionCode!: string;
  /** Geographic area to which the sales territory belong. */
  group!: string;
  /** Sales in the territory year to date. */
  salesYTD!: number;
  /** Sales in the territory the previous year. */
  salesLastYear!: number;
  /** Business costs in the territory year to date. */
  costYTD!: number;
  /** Business costs in the territory the previous year. */
  costLastYear!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  countryRegion?: CountryRegion;
  stateProvinces?: StateProvince[] | undefined;
  customers?: Customer[] | undefined;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;
  salesPeople?: SalesPerson[] | undefined;
  salesTerritoryHistories?: SalesTerritoryHistory[] | undefined;

  constructor(data?: ISalesTerritory) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.territoryID = _data["territoryID"];
      this.name = _data["name"];
      this.countryRegionCode = _data["countryRegionCode"];
      this.group = _data["group"];
      this.salesYTD = _data["salesYTD"];
      this.salesLastYear = _data["salesLastYear"];
      this.costYTD = _data["costYTD"];
      this.costLastYear = _data["costLastYear"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.countryRegion = _data["countryRegion"] ? CountryRegion.fromJS(_data["countryRegion"]) : undefined as any;
      if (Array.isArray(_data["stateProvinces"])) {
        this.stateProvinces = [] as any;
        for (let item of _data["stateProvinces"])
          this.stateProvinces!.push(StateProvince.fromJS(item));
      }
      if (Array.isArray(_data["customers"])) {
        this.customers = [] as any;
        for (let item of _data["customers"])
          this.customers!.push(Customer.fromJS(item));
      }
      if (Array.isArray(_data["salesOrderHeaders"])) {
        this.salesOrderHeaders = [] as any;
        for (let item of _data["salesOrderHeaders"])
          this.salesOrderHeaders!.push(SalesOrderHeader.fromJS(item));
      }
      if (Array.isArray(_data["salesPeople"])) {
        this.salesPeople = [] as any;
        for (let item of _data["salesPeople"])
          this.salesPeople!.push(SalesPerson.fromJS(item));
      }
      if (Array.isArray(_data["salesTerritoryHistories"])) {
        this.salesTerritoryHistories = [] as any;
        for (let item of _data["salesTerritoryHistories"])
          this.salesTerritoryHistories!.push(SalesTerritoryHistory.fromJS(item));
      }
    }
  }

  static fromJS(data: any): SalesTerritory {
    data = typeof data === 'object' ? data : {};
    let result = new SalesTerritory();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["territoryID"] = this.territoryID;
    data["name"] = this.name;
    data["countryRegionCode"] = this.countryRegionCode;
    data["group"] = this.group;
    data["salesYTD"] = this.salesYTD;
    data["salesLastYear"] = this.salesLastYear;
    data["costYTD"] = this.costYTD;
    data["costLastYear"] = this.costLastYear;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["countryRegion"] = this.countryRegion ? this.countryRegion.toJSON() : undefined as any;
    if (Array.isArray(this.stateProvinces)) {
      data["stateProvinces"] = [];
      for (let item of this.stateProvinces)
        data["stateProvinces"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.customers)) {
      data["customers"] = [];
      for (let item of this.customers)
        data["customers"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.salesOrderHeaders)) {
      data["salesOrderHeaders"] = [];
      for (let item of this.salesOrderHeaders)
        data["salesOrderHeaders"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.salesPeople)) {
      data["salesPeople"] = [];
      for (let item of this.salesPeople)
        data["salesPeople"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.salesTerritoryHistories)) {
      data["salesTerritoryHistories"] = [];
      for (let item of this.salesTerritoryHistories)
        data["salesTerritoryHistories"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface ISalesTerritory {
  /** Primary key for SalesTerritory records. */
  territoryID: number;
  /** Sales territory description */
  name: string;
  /** ISO standard country or region code. Foreign key to CountryRegion.CountryRegionCode.  */
  countryRegionCode: string;
  /** Geographic area to which the sales territory belong. */
  group: string;
  /** Sales in the territory year to date. */
  salesYTD: number;
  /** Sales in the territory the previous year. */
  salesLastYear: number;
  /** Business costs in the territory year to date. */
  costYTD: number;
  /** Business costs in the territory the previous year. */
  costLastYear: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  countryRegion?: CountryRegion;
  stateProvinces?: StateProvince[] | undefined;
  customers?: Customer[] | undefined;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;
  salesPeople?: SalesPerson[] | undefined;
  salesTerritoryHistories?: SalesTerritoryHistory[] | undefined;
}
