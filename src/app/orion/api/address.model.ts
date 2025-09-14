import {SqlGeography} from "./SqlGeography";
import {StateProvince} from "./state-province.model";
import {SalesOrderHeader} from "./sale-order-header.model";
import {BusinessEntityAddress} from "./business-entity-address.model";

export class Address implements IAddress {
  /** Primary key for Address records. */
  addressID!: number;
  /** First street address line. */
  addressLine1!: string;
  /** Second street address line. */
  addressLine2?: string | undefined;
  /** Name of the city. */
  city!: string;
  /** Unique identification number for the state or province. Foreign key to StateProvince table. */
  stateProvinceID!: number;
  /** Postal code for the street address. */
  postalCode!: string;
  spatialLocation?: SqlGeography;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  stateProvince?: StateProvince;
  businessEntityAddress?: BusinessEntityAddress[] | undefined;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;
  salesOrderHeaders1?: SalesOrderHeader[] | undefined;

  constructor(data?: IAddress) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.addressID = _data["addressID"];
      this.addressLine1 = _data["addressLine1"];
      this.addressLine2 = _data["addressLine2"];
      this.city = _data["city"];
      this.stateProvinceID = _data["stateProvinceID"];
      this.postalCode = _data["postalCode"];
      this.spatialLocation = _data["spatialLocation"] ? SqlGeography.fromJS(_data["spatialLocation"]) : undefined as any;
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.stateProvince = _data["stateProvince"] ? StateProvince.fromJS(_data["stateProvince"]) : undefined as any;
      if (Array.isArray(_data["businessEntityAddress"])) {
        this.businessEntityAddress = [] as any;
        for (let item of _data["businessEntityAddress"])
          this.businessEntityAddress!.push(BusinessEntityAddress.fromJS(item));
      }
      if (Array.isArray(_data["salesOrderHeaders"])) {
        this.salesOrderHeaders = [] as any;
        for (let item of _data["salesOrderHeaders"])
          this.salesOrderHeaders!.push(SalesOrderHeader.fromJS(item));
      }
      if (Array.isArray(_data["salesOrderHeaders1"])) {
        this.salesOrderHeaders1 = [] as any;
        for (let item of _data["salesOrderHeaders1"])
          this.salesOrderHeaders1!.push(SalesOrderHeader.fromJS(item));
      }
    }
  }

  static fromJS(data: any): Address {
    data = typeof data === 'object' ? data : {};
    let result = new Address();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["addressID"] = this.addressID;
    data["addressLine1"] = this.addressLine1;
    data["addressLine2"] = this.addressLine2;
    data["city"] = this.city;
    data["stateProvinceID"] = this.stateProvinceID;
    data["postalCode"] = this.postalCode;
    data["spatialLocation"] = this.spatialLocation ? this.spatialLocation.toJSON() : undefined as any;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["stateProvince"] = this.stateProvince ? this.stateProvince.toJSON() : undefined as any;
    if (Array.isArray(this.businessEntityAddress)) {
      data["businessEntityAddress"] = [];
      for (let item of this.businessEntityAddress)
        data["businessEntityAddress"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.salesOrderHeaders)) {
      data["salesOrderHeaders"] = [];
      for (let item of this.salesOrderHeaders)
        data["salesOrderHeaders"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.salesOrderHeaders1)) {
      data["salesOrderHeaders1"] = [];
      for (let item of this.salesOrderHeaders1)
        data["salesOrderHeaders1"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface IAddress {
  /** Primary key for Address records. */
  addressID: number;
  /** First street address line. */
  addressLine1: string;
  /** Second street address line. */
  addressLine2?: string | undefined;
  /** Name of the city. */
  city: string;
  /** Unique identification number for the state or province. Foreign key to StateProvince table. */
  stateProvinceID: number;
  /** Postal code for the street address. */
  postalCode: string;
  spatialLocation?: SqlGeography;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  stateProvince?: StateProvince;
  businessEntityAddress?: BusinessEntityAddress[] | undefined;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;
  salesOrderHeaders1?: SalesOrderHeader[] | undefined;
}
