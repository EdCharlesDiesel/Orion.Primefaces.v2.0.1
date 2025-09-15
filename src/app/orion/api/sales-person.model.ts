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
