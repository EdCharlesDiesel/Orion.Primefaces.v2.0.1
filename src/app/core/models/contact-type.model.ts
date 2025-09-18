import {BusinessEntityContact} from "./business-entity-contact.model";

export class ContactType{
  /** Primary key for ContactType records. */
  contactTypeID!: number;
  /** Contact type description. */
  name!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  businessEntityContact?: BusinessEntityContact[] | undefined;

}

export interface IContactType {
  /** Primary key for ContactType records. */
  contactTypeID: number;
  /** Contact type description. */
  name: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  businessEntityContact?: BusinessEntityContact[] | undefined;
}
