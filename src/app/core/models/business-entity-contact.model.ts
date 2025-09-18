import {BusinessEntity} from "./business-entity.model";
import {ContactType} from "./contact-type.model";
import {Person} from "../auth/person.model";

export class BusinessEntityContact  {
  /** Primary key. Foreign key to BusinessEntity.BusinessEntityID. */
  businessEntityID!: number;
  /** Primary key. Foreign key to Person.BusinessEntityID. */
  personID!: number;
  /** Primary key.  Foreign key to ContactType.ContactTypeID. */
  contactTypeID!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  businessEntity?: BusinessEntity;
  person?: Person;
  contactType?: ContactType;

}

export interface IBusinessEntityContact {
  /** Primary key. Foreign key to BusinessEntity.BusinessEntityID. */
  businessEntityID: number;
  /** Primary key. Foreign key to Person.BusinessEntityID. */
  personID: number;
  /** Primary key.  Foreign key to ContactType.ContactTypeID. */
  contactTypeID: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  businessEntity?: BusinessEntity;
  person?: Person;
  contactType?: ContactType;
}
