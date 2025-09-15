import {BusinessEntity} from "./business-entity.model";
import {Employee} from "./employee.model";
import {BusinessEntityContact} from "./business-entity-contact.model";
import {EmailAddress} from "./email-address.model";
import {Password} from "primeng/password";
import {PersonPhone} from "./person-phone.model";
import {Customer} from "./customer";
import {PersonCreditCard} from "./person-credit-card.model";

export class Person implements IPerson {
  /** Primary key for Person records. */
  businessEntityID!: number;
  /** Primary type of person: SC = Store Contact, IN = Individual (retail) customer, SP = Sales person, EM = Employee (non-sales), VC = Vendor contact, GC = General contact */
  personType!: string;
  /** 0 = The data in FirstName and LastName are stored in western style (first name, last name) order.  1 = Eastern style (last name, first name) order. */
  nameStyle!: boolean;
  /** A courtesy title. For example, Mr. or Ms. */
  title?: string | undefined;
  /** First name of the person. */
  firstName!: string;
  /** Middle name or middle initial of the person. */
  middleName?: string | undefined;
  /** Last name of the person. */
  lastName!: string;
  /** Surname suffix. For example, Sr. or Jr. */
  suffix?: string | undefined;
  /** 0 = Contact does not wish to receive e-mail promotions, 1 = Contact does wish to receive e-mail promotions from OrionProductionDatabase, 2 = Contact does wish to receive e-mail promotions from OrionProductionDatabase and selected partners.  */
  emailPromotion!: number;
  /** Additional contact information about the person stored in xml format.  */
  additionalContactInfo?: string | undefined;
  /** Personal information such as hobbies, and income collected from online shoppers. Used for sales analysis. */
  demographics?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  businessEntity?: BusinessEntity;
  employee?: Employee;
  businessEntityContact?: BusinessEntityContact[] | undefined;
  emailAddresses?: EmailAddress[] | undefined;
  password?: Password;
  personPhones?: PersonPhone[] | undefined;
  customers?: Customer[] | undefined;
  personCreditCards?: PersonCreditCard[] | undefined;

}

export interface IPerson {
  /** Primary key for Person records. */
  businessEntityID: number;
  /** Primary type of person: SC = Store Contact, IN = Individual (retail) customer, SP = Sales person, EM = Employee (non-sales), VC = Vendor contact, GC = General contact */
  personType: string;
  /** 0 = The data in FirstName and LastName are stored in western style (first name, last name) order.  1 = Eastern style (last name, first name) order. */
  nameStyle: boolean;
  /** A courtesy title. For example, Mr. or Ms. */
  title?: string | undefined;
  /** First name of the person. */
  firstName: string;
  /** Middle name or middle initial of the person. */
  middleName?: string | undefined;
  /** Last name of the person. */
  lastName: string;
  /** Surname suffix. For example, Sr. or Jr. */
  suffix?: string | undefined;
  /** 0 = Contact does not wish to receive e-mail promotions, 1 = Contact does wish to receive e-mail promotions from OrionProductionDatabase, 2 = Contact does wish to receive e-mail promotions from OrionProductionDatabase and selected partners.  */
  emailPromotion: number;
  /** Additional contact information about the person stored in xml format.  */
  additionalContactInfo?: string | undefined;
  /** Personal information such as hobbies, and income collected from online shoppers. Used for sales analysis. */
  demographics?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  businessEntity?: BusinessEntity;
  employee?: Employee;
  businessEntityContact?: BusinessEntityContact[] | undefined;
  emailAddresses?: EmailAddress[] | undefined;
  password?: Password;
  personPhones?: PersonPhone[] | undefined;
  customers?: Customer[] | undefined;
  personCreditCards?: PersonCreditCard[] | undefined;
}
