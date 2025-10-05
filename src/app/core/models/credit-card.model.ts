import {SalesOrderHeader} from "./sale-order-header.model";
import {PersonCreditCard} from "./person-credit-card.model";

export class CreditCard  {
  /** Primary key for CreditCard records. */
  creditCardID!: number;
  /** Credit card name. */
  cardType!: string;
  /** Credit card number. */
  cardNumber!: string;
  /** Credit card expiration month. */
  expMonth!: number;
  /** Credit card expiration year. */
  expYear!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  personCreditCards?: PersonCreditCard[] | undefined;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;

}

export interface ICreditCard {
  /** Primary key for CreditCard records. */
  creditCardID: number;
  /** Credit card name. */
  cardType: string;
  /** Credit card number. */
  cardNumber: string;
  /** Credit card expiration month. */
  expMonth: number;
  /** Credit card expiration year. */
  expYear: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  personCreditCards?: PersonCreditCard[] | undefined;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;
}
