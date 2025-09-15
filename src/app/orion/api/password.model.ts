import {Person} from "./person.model";

export class Password {
  businessEntityID!: number;
  /** Password for the e-mail account. */
  passwordHash!: string;
  /** Random value concatenated with the password string before the password is hashed. */
  passwordSalt!: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  person?: Person;

}

export interface IPassword {
  businessEntityID: number;
  /** Password for the e-mail account. */
  passwordHash: string;
  /** Random value concatenated with the password string before the password is hashed. */
  passwordSalt: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  person?: Person;
}
