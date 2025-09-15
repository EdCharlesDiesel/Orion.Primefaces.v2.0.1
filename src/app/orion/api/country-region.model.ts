import {SalesTerritory} from "./sales-territory.model";
import {CountryRegionCurrency} from "./country-region-currency.model";
import {StateProvince} from "./state-province.model";

export class CountryRegion{
  /** ISO standard code for countries and regions. */
  countryRegionCode!: string;
  /** Country or region name. */
  name!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  stateProvinces?: StateProvince[] | undefined;
  countryRegionCurrencies?: CountryRegionCurrency[] | undefined;
  salesTerritories?: SalesTerritory[] | undefined;

}

export interface ICountryRegion {
  /** ISO standard code for countries and regions. */
  countryRegionCode: string;
  /** Country or region name. */
  name: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  stateProvinces?: StateProvince[] | undefined;
  countryRegionCurrencies?: CountryRegionCurrency[] | undefined;
  salesTerritories?: SalesTerritory[] | undefined;
}
