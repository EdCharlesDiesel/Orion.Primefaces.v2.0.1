import {BusinessEntity} from "./business-entity.model";
import {Address} from "./address.model";
import {AddressType} from "./address-type.model";

export class BusinessEntityAddress{
  /** Primary key. Foreign key to BusinessEntity.BusinessEntityID. */
  businessEntityID!: number;
  /** Primary key. Foreign key to Address.AddressID. */
  addressID!: number;
  /** Primary key. Foreign key to AddressType.AddressTypeID. */
  addressTypeID!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  businessEntity?: BusinessEntity;
  address?: Address;
  addressType?: AddressType;

}

export interface IBusinessEntityAddress {
  /** Primary key. Foreign key to BusinessEntity.BusinessEntityID. */
  businessEntityID: number;
  /** Primary key. Foreign key to Address.AddressID. */
  addressID: number;
  /** Primary key. Foreign key to AddressType.AddressTypeID. */
  addressTypeID: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  businessEntity?: BusinessEntity;
  address?: Address;
  addressType?: AddressType;
}
