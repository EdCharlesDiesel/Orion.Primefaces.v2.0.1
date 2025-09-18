import {CreditCard} from "./credit-card.model";
import {Person} from "../auth/person.model";

export class PersonCreditCard {
  /** Business entity identification number. Foreign key to Person.BusinessEntityID. */
  businessEntityID!: number;
  /** Credit card identification number. Foreign key to CreditCard.CreditCardID. */
  creditCardID!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  person?: Person;
  creditCard?: CreditCard;

}

export interface IPersonCreditCard {
  /** Business entity identification number. Foreign key to Person.BusinessEntityID. */
  businessEntityID: number;
  /** Credit card identification number. Foreign key to CreditCard.CreditCardID. */
  creditCardID: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  person?: Person;
  creditCard?: CreditCard;
}
