import {SqlGeography} from "./SqlGeography";
import {StateProvince} from "./state-province.model";
import {SalesOrderHeader} from "./sale-order-header.model";
import {BusinessEntityAddress} from "./business-entity-address.model";

export class Address {
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
