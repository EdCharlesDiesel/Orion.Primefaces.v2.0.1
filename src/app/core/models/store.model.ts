import {Customer} from "./customer";
import {SalesPerson} from "./sales-person.model";
import {BusinessEntity} from "./business-entity.model";

export class StoreModel {
  /** Primary key. Foreign key to Customer.BusinessEntityID. */
  businessEntityID!: number;
  /** Name of the store. */
  name!: string;
  /** ID of the sales person assigned to the customer. Foreign key to SalesPersonModel.BusinessEntityID. */
  salesPersonID?: number | undefined;
  /** Demographic informationg about the store such as the number of employees, annual sales and store type. */
  demographics?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  businessEntity?: BusinessEntity;
  salesPerson?: SalesPerson;
  customers?: Customer[] | undefined;

}

export interface IStore {
  /** Primary key. Foreign key to Customer.BusinessEntityID. */
  businessEntityID: number;
  /** Name of the store. */
  name: string;
  /** ID of the sales person assigned to the customer. Foreign key to SalesPersonModel.BusinessEntityID. */
  salesPersonID?: number | undefined;
  /** Demographic informationg about the store such as the number of employees, annual sales and store type. */
  demographics?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  businessEntity?: BusinessEntity;
  salesPerson?: SalesPerson;
  customers?: Customer[] | undefined;
}
