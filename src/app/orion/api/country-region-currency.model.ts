export class CountryRegionCurrency implements ICountryRegionCurrency {
  /** ISO code for countries and regions. Foreign key to CountryRegion.CountryRegionCode. */
  countryRegionCode!: string;
  /** ISO standard currency code. Foreign key to Currency.CurrencyCode. */
  currencyCode!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  countryRegion?: CountryRegion;
  currency?: Currency;

  constructor(data?: ICountryRegionCurrency) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.countryRegionCode = _data["countryRegionCode"];
      this.currencyCode = _data["currencyCode"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.countryRegion = _data["countryRegion"] ? CountryRegion.fromJS(_data["countryRegion"]) : undefined as any;
      this.currency = _data["currency"] ? Currency.fromJS(_data["currency"]) : undefined as any;
    }
  }

  static fromJS(data: any): CountryRegionCurrency {
    data = typeof data === 'object' ? data : {};
    let result = new CountryRegionCurrency();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["countryRegionCode"] = this.countryRegionCode;
    data["currencyCode"] = this.currencyCode;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["countryRegion"] = this.countryRegion ? this.countryRegion.toJSON() : undefined as any;
    data["currency"] = this.currency ? this.currency.toJSON() : undefined as any;
    return data;
  }
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
