import {SalesPerson} from "./sales-person.model";

export class SalesPersonQuotaHistory implements ISalesPersonQuotaHistory {
  /** Sales person identification number. Foreign key to SalesPersonModel.BusinessEntityID. */
  businessEntityID!: number;
  /** Sales quota date. */
  quotaDate!: Date;
  /** Sales quota amount. */
  salesQuota!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  salesPerson?: SalesPerson;

}

export interface ISalesPersonQuotaHistory {
  /** Sales person identification number. Foreign key to SalesPersonModel.BusinessEntityID. */
  businessEntityID: number;
  /** Sales quota date. */
  quotaDate: Date;
  /** Sales quota amount. */
  salesQuota: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  salesPerson?: SalesPerson;
}
