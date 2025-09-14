import {SalesTerritory} from "./sales-territory.model";
import {CountryRegionCurrency} from "./country-region-currency.model";
import {StateProvince} from "./state-province.model";

export class CountryRegion implements ICountryRegion {
  /** ISO standard code for countries and regions. */
  countryRegionCode!: string;
  /** Country or region name. */
  name!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  stateProvinces?: StateProvince[] | undefined;
  countryRegionCurrencies?: CountryRegionCurrency[] | undefined;
  salesTerritories?: SalesTerritory[] | undefined;

  constructor(data?: ICountryRegion) {
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
      this.name = _data["name"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["stateProvinces"])) {
        this.stateProvinces = [] as any;
        for (let item of _data["stateProvinces"])
          this.stateProvinces!.push(StateProvince.fromJS(item));
      }
      if (Array.isArray(_data["countryRegionCurrencies"])) {
        this.countryRegionCurrencies = [] as any;
        for (let item of _data["countryRegionCurrencies"])
          this.countryRegionCurrencies!.push(CountryRegionCurrency.fromJS(item));
      }
      if (Array.isArray(_data["salesTerritories"])) {
        this.salesTerritories = [] as any;
        for (let item of _data["salesTerritories"])
          this.salesTerritories!.push(SalesTerritory.fromJS(item));
      }
    }
  }

  static fromJS(data: any): CountryRegion {
    data = typeof data === 'object' ? data : {};
    let result = new CountryRegion();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["countryRegionCode"] = this.countryRegionCode;
    data["name"] = this.name;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.stateProvinces)) {
      data["stateProvinces"] = [];
      for (let item of this.stateProvinces)
        data["stateProvinces"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.countryRegionCurrencies)) {
      data["countryRegionCurrencies"] = [];
      for (let item of this.countryRegionCurrencies)
        data["countryRegionCurrencies"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.salesTerritories)) {
      data["salesTerritories"] = [];
      for (let item of this.salesTerritories)
        data["salesTerritories"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
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
