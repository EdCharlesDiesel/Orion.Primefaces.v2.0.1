import {BusinessEntityAddress} from "./business-entity-address.model";

export class AddressType{
  /** Primary key for AddressType records. */
  addressTypeId!: number;
  /** Address type description. For example, Billing, Home, or Shipping. */
  name!: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  businessEntityAddress?: BusinessEntityAddress[] | undefined;

}

export interface IAddressType {
  /** Primary key for AddressType records. */
  addressTypeId: number;
  /** Address type description. For example, Billing, Home, or Shipping. */
  name: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  businessEntityAddress?: BusinessEntityAddress[] | undefined;
}
