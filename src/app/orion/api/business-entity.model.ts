import {BusinessEntityAddress} from "./business-entity-address.model";
import {BusinessEntityContact} from "./business-entity-contact.model";

export class BusinessEntity {
  /** Primary key for all customers, vendors, and employees. */
  businessEntityID!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  businessEntityAddress?: BusinessEntityAddress[] | undefined;
  businessEntityContact?: BusinessEntityContact[] | undefined;
}

export interface IBusinessEntity {
  /** Primary key for all customers, vendors, and employees. */
  businessEntityID: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  businessEntityAddress?: BusinessEntityAddress[] | undefined;
  businessEntityContact?: BusinessEntityContact[] | undefined;
}
