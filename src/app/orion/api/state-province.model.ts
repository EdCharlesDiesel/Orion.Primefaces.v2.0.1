import {SalesTerritory} from "./sales-territory.model";
import {SalesTaxRate} from "./sales-tax-rate.model";
import {Address} from "./address.model";
import {CountryRegion} from "./country-region.model";

export class StateProvince  {
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
