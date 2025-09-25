import {Currency} from "./currency.model";
import {SalesOrderHeader} from "./sale-order-header.model";

export class CurrencyRate implements ICurrencyRate {
  /** Primary key for CurrencyRate records. */
  currencyRateID!: number;
  /** Date and time the exchange rate was obtained. */
  currencyRateDate!: Date;
  /** Exchange rate was converted from this currency code. */
  fromCurrencyCode!: string;
  /** Exchange rate was converted to this currency code. */
  toCurrencyCode!: string;
  /** Average exchange rate for the day. */
  averageRate!: number;
  /** Final exchange rate for the day. */
  endOfDayRate!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  currency?: Currency;
  currency1?: Currency;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;

}

export interface ICurrencyRate {
  /** Primary key for CurrencyRate records. */
  currencyRateID: number;
  /** Date and time the exchange rate was obtained. */
  currencyRateDate: Date;
  /** Exchange rate was converted from this currency code. */
  fromCurrencyCode: string;
  /** Exchange rate was converted to this currency code. */
  toCurrencyCode: string;
  /** Average exchange rate for the day. */
  averageRate: number;
  /** Final exchange rate for the day. */
  endOfDayRate: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  currency?: Currency;
  currency1?: Currency;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;
}
