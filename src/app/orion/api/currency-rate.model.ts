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

  constructor(data?: ICurrencyRate) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.currencyRateID = _data["currencyRateID"];
      this.currencyRateDate = _data["currencyRateDate"] ? new Date(_data["currencyRateDate"].toString()) : undefined as any;
      this.fromCurrencyCode = _data["fromCurrencyCode"];
      this.toCurrencyCode = _data["toCurrencyCode"];
      this.averageRate = _data["averageRate"];
      this.endOfDayRate = _data["endOfDayRate"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.currency = _data["currency"] ? Currency.fromJS(_data["currency"]) : undefined as any;
      this.currency1 = _data["currency1"] ? Currency.fromJS(_data["currency1"]) : undefined as any;
      if (Array.isArray(_data["salesOrderHeaders"])) {
        this.salesOrderHeaders = [] as any;
        for (let item of _data["salesOrderHeaders"])
          this.salesOrderHeaders!.push(SalesOrderHeader.fromJS(item));
      }
    }
  }

  static fromJS(data: any): CurrencyRate {
    data = typeof data === 'object' ? data : {};
    let result = new CurrencyRate();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["currencyRateID"] = this.currencyRateID;
    data["currencyRateDate"] = this.currencyRateDate ? this.currencyRateDate.toISOString() : undefined as any;
    data["fromCurrencyCode"] = this.fromCurrencyCode;
    data["toCurrencyCode"] = this.toCurrencyCode;
    data["averageRate"] = this.averageRate;
    data["endOfDayRate"] = this.endOfDayRate;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["currency"] = this.currency ? this.currency.toJSON() : undefined as any;
    data["currency1"] = this.currency1 ? this.currency1.toJSON() : undefined as any;
    if (Array.isArray(this.salesOrderHeaders)) {
      data["salesOrderHeaders"] = [];
      for (let item of this.salesOrderHeaders)
        data["salesOrderHeaders"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
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
