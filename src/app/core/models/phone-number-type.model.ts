import {PersonPhone} from "./person-phone.model";

export class PhoneNumberType  {
  /** Primary key for telephone number type records. */
  phoneNumberTypeID!: number;
  /** Name of the telephone number type */
  name!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  personPhones?: PersonPhone[] | undefined;

}

export interface IPhoneNumberType {
  /** Primary key for telephone number type records. */
  phoneNumberTypeID: number;
  /** Name of the telephone number type */
  name: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  personPhones?: PersonPhone[] | undefined;
}
