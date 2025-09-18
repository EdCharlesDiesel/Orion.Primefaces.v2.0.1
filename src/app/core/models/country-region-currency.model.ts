import {CountryRegion} from "./country-region.model";
import {Currency} from "./currency.model";

export class CountryRegionCurrency  {
  /** ISO code for countries and regions. Foreign key to CountryRegion.CountryRegionCode. */
  countryRegionCode!: string;
  /** ISO standard currency code. Foreign key to Currency.CurrencyCode. */
  currencyCode!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  countryRegion?: CountryRegion;
  currency?: Currency;

}

export interface ICountryRegionCurrency {
  /** ISO code for countries and regions. Foreign key to CountryRegion.CountryRegionCode. */
  countryRegionCode: string;
  /** ISO standard currency code. Foreign key to Currency.CurrencyCode. */
  currencyCode: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  countryRegion?: CountryRegion;
  currency?: Currency;
}
