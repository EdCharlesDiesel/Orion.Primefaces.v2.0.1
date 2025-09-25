import {PhoneNumberType} from "./phone-number-type.model";
import {Person} from "../authentication/person.model";

export class PersonPhone {
  /** Business entity identification number. Foreign key to Person.BusinessEntityID. */
  businessEntityID!: number;
  /** Telephone number identification number. */
  phoneNumber!: string;
  /** Kind of phone number. Foreign key to PhoneNumberType.PhoneNumberTypeID. */
  phoneNumberTypeID!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  person?: Person;
  phoneNumberType?: PhoneNumberType;

}

export interface IPersonPhone {
  /** Business entity identification number. Foreign key to Person.BusinessEntityID. */
  businessEntityID: number;
  /** Telephone number identification number. */
  phoneNumber: string;
  /** Kind of phone number. Foreign key to PhoneNumberType.PhoneNumberTypeID. */
  phoneNumberTypeID: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  person?: Person;
  phoneNumberType?: PhoneNumberType;
}
