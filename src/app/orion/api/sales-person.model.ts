import {Store} from "./store";
import {SalesTerritoryHistory} from "./sales-territory-history.model";
import {SalesPersonQuotaHistory} from "./sales-person-quota-history.model";
import {SalesTerritory} from "./sales-territory.model";
import {Employee} from "./employee.model";
import {SalesOrderHeader} from "./sale-order-header.model";

export class SalesPerson implements ISalesPerson {
  /** Primary key for SalesPersonModel records. Foreign key to Employee.BusinessEntityID */
  businessEntityID!: number;
  /** Territory currently assigned to. Foreign key to SalesTerritory.SalesTerritoryID. */
  territoryID?: number | undefined;
  /** Projected yearly sales. */
  salesQuota?: number | undefined;
  /** Bonus due if quota is met. */
  bonus!: number;
  /** Commision percent received per sale. */
  commissionPct!: number;
  /** Sales total year to date. */
  salesYTD!: number;
  /** Sales total of previous year. */
  salesLastYear!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  employee?: Employee;
  salesTerritory?: SalesTerritory;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;
  salesPersonQuotaHistories?: SalesPersonQuotaHistory[] | undefined;
  salesTerritoryHistories?: SalesTerritoryHistory[] | undefined;
  stores?: Store[] | undefined;

  constructor(data?: ISalesPerson) {
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
      this.territoryID = _data["territoryID"];
      this.salesQuota = _data["salesQuota"];
      this.bonus = _data["bonus"];
      this.commissionPct = _data["commissionPct"];
      this.salesYTD = _data["salesYTD"];
      this.salesLastYear = _data["salesLastYear"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.employee = _data["employee"] ? Employee.fromJS(_data["employee"]) : undefined as any;
      this.salesTerritory = _data["salesTerritory"] ? SalesTerritory.fromJS(_data["salesTerritory"]) : undefined as any;
      if (Array.isArray(_data["salesOrderHeaders"])) {
        this.salesOrderHeaders = [] as any;
        for (let item of _data["salesOrderHeaders"])
          this.salesOrderHeaders!.push(SalesOrderHeader.fromJS(item));
      }
      if (Array.isArray(_data["salesPersonQuotaHistories"])) {
        this.salesPersonQuotaHistories = [] as any;
        for (let item of _data["salesPersonQuotaHistories"])
          this.salesPersonQuotaHistories!.push(SalesPersonQuotaHistory.fromJS(item));
      }
      if (Array.isArray(_data["salesTerritoryHistories"])) {
        this.salesTerritoryHistories = [] as any;
        for (let item of _data["salesTerritoryHistories"])
          this.salesTerritoryHistories!.push(SalesTerritoryHistory.fromJS(item));
      }
      if (Array.isArray(_data["stores"])) {
        this.stores = [] as any;
        for (let item of _data["stores"])
          this.stores!.push(Store.fromJS(item));
      }
    }
  }

  static fromJS(data: any): SalesPersonModel {
    data = typeof data === 'object' ? data : {};
    let result = new SalesPersonModel();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["businessEntityID"] = this.businessEntityID;
    data["territoryID"] = this.territoryID;
    data["salesQuota"] = this.salesQuota;
    data["bonus"] = this.bonus;
    data["commissionPct"] = this.commissionPct;
    data["salesYTD"] = this.salesYTD;
    data["salesLastYear"] = this.salesLastYear;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["employee"] = this.employee ? this.employee.toJSON() : undefined as any;
    data["salesTerritory"] = this.salesTerritory ? this.salesTerritory.toJSON() : undefined as any;
    if (Array.isArray(this.salesOrderHeaders)) {
      data["salesOrderHeaders"] = [];
      for (let item of this.salesOrderHeaders)
        data["salesOrderHeaders"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.salesPersonQuotaHistories)) {
      data["salesPersonQuotaHistories"] = [];
      for (let item of this.salesPersonQuotaHistories)
        data["salesPersonQuotaHistories"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.salesTerritoryHistories)) {
      data["salesTerritoryHistories"] = [];
      for (let item of this.salesTerritoryHistories)
        data["salesTerritoryHistories"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.stores)) {
      data["stores"] = [];
      for (let item of this.stores)
        data["stores"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface ISalesPerson {
  /** Primary key for SalesPersonModel records. Foreign key to Employee.BusinessEntityID */
  businessEntityID: number;
  /** Territory currently assigned to. Foreign key to SalesTerritory.SalesTerritoryID. */
  territoryID?: number | undefined;
  /** Projected yearly sales. */
  salesQuota?: number | undefined;
  /** Bonus due if quota is met. */
  bonus: number;
  /** Commision percent received per sale. */
  commissionPct: number;
  /** Sales total year to date. */
  salesYTD: number;
  /** Sales total of previous year. */
  salesLastYear: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  employee?: Employee;
  salesTerritory?: SalesTerritory;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;
  salesPersonQuotaHistories?: SalesPersonQuotaHistory[] | undefined;
  salesTerritoryHistories?: SalesTerritoryHistory[] | undefined;
  stores?: Store[] | undefined;
}
