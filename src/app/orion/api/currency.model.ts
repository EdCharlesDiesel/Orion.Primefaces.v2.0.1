import {CountryRegionCurrency} from "./country-region-currency.model";
import {CurrencyRate} from "./currency-rate.model";

export class Currency implements ICurrency {
  /** The ISO code for the Currency. */
  currencyCode!: string;
  /** Currency name. */
  name!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  countryRegionCurrencies?: CountryRegionCurrency[] | undefined;
  currencyRates?: CurrencyRate[] | undefined;
  currencyRates1?: CurrencyRate[] | undefined;

  constructor(data?: ICurrency) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.currencyCode = _data["currencyCode"];
      this.name = _data["name"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["countryRegionCurrencies"])) {
        this.countryRegionCurrencies = [] as any;
        for (let item of _data["countryRegionCurrencies"])
          this.countryRegionCurrencies!.push(CountryRegionCurrency.fromJS(item));
      }
      if (Array.isArray(_data["currencyRates"])) {
        this.currencyRates = [] as any;
        for (let item of _data["currencyRates"])
          this.currencyRates!.push(CurrencyRate.fromJS(item));
      }
      if (Array.isArray(_data["currencyRates1"])) {
        this.currencyRates1 = [] as any;
        for (let item of _data["currencyRates1"])
          this.currencyRates1!.push(CurrencyRate.fromJS(item));
      }
    }
  }

  static fromJS(data: any): Currency {
    data = typeof data === 'object' ? data : {};
    let result = new Currency();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["currencyCode"] = this.currencyCode;
    data["name"] = this.name;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.countryRegionCurrencies)) {
      data["countryRegionCurrencies"] = [];
      for (let item of this.countryRegionCurrencies)
        data["countryRegionCurrencies"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.currencyRates)) {
      data["currencyRates"] = [];
      for (let item of this.currencyRates)
        data["currencyRates"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.currencyRates1)) {
      data["currencyRates1"] = [];
      for (let item of this.currencyRates1)
        data["currencyRates1"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
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
