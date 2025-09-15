import {SalesTerritoryHistory} from "./sales-territory-history.model";
import {Customer} from "./customer";
import {StateProvince} from "./state-province.model";
import {SalesOrderHeader} from "./sale-order-header.model";
import {SalesPerson} from "./sales-person.model";
import {CountryRegion} from "./country-region.model";

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
