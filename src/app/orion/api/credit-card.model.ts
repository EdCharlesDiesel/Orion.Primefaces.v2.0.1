import {SalesOrderHeader} from "./sale-order-header.model";

export class CreditCard implements ICreditCard {
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

  constructor(data?: ICreditCard) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.creditCardID = _data["creditCardID"];
      this.cardType = _data["cardType"];
      this.cardNumber = _data["cardNumber"];
      this.expMonth = _data["expMonth"];
      this.expYear = _data["expYear"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["personCreditCards"])) {
        this.personCreditCards = [] as any;
        for (let item of _data["personCreditCards"])
          this.personCreditCards!.push(PersonCreditCard.fromJS(item));
      }
      if (Array.isArray(_data["salesOrderHeaders"])) {
        this.salesOrderHeaders = [] as any;
        for (let item of _data["salesOrderHeaders"])
          this.salesOrderHeaders!.push(SalesOrderHeader.fromJS(item));
      }
    }
  }

  static fromJS(data: any): CreditCard {
    data = typeof data === 'object' ? data : {};
    let result = new CreditCard();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["creditCardID"] = this.creditCardID;
    data["cardType"] = this.cardType;
    data["cardNumber"] = this.cardNumber;
    data["expMonth"] = this.expMonth;
    data["expYear"] = this.expYear;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.personCreditCards)) {
      data["personCreditCards"] = [];
      for (let item of this.personCreditCards)
        data["personCreditCards"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.salesOrderHeaders)) {
      data["salesOrderHeaders"] = [];
      for (let item of this.salesOrderHeaders)
        data["salesOrderHeaders"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
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
