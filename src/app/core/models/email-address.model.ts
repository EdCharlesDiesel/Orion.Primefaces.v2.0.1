import {Person} from "../authentication/person.model";

export class EmailAddress  {
  /** Primary key. Person associated with this email address.  Foreign key to Person.BusinessEntityID */
  businessEntityID!: number;
  /** Primary key. ID of this email address. */
  emailAddressID!: number;
  /** E-mail address for the person. */
  personalEmailAddress?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  person?: Person;

}

export interface IEmailAddress {
  /** Primary key. Person associated with this email address.  Foreign key to Person.BusinessEntityID */
  businessEntityID: number;
  /** Primary key. ID of this email address. */
  emailAddressID: number;
  /** E-mail address for the person. */
  personalEmailAddress?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  person?: Person;
}
