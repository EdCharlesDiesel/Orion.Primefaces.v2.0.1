import {CountryRegionCurrency} from "./country-region-currency.model";
import {CurrencyRate} from "./currency-rate.model";

export class Currency  {
  /** The ISO code for the Currency. */
  currencyCode!: string;
  /** Currency name. */
  name!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  countryRegionCurrencies?: CountryRegionCurrency[] | undefined;
  currencyRates?: CurrencyRate[] | undefined;
  currencyRates1?: CurrencyRate[] | undefined;

}

export interface ICurrency {
  /** The ISO code for the Currency. */
  currencyCode: string;
  /** Currency name. */
  name: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  countryRegionCurrencies?: CountryRegionCurrency[] | undefined;
  currencyRates?: CurrencyRate[] | undefined;
  currencyRates1?: CurrencyRate[] | undefined;
}
