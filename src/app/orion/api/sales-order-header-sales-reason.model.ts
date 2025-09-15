import {SalesReason} from "./sales-reason.model";
import {SalesOrderHeader} from "./sale-order-header.model";

export class SalesOrderHeaderSalesReason implements ISalesOrderHeaderSalesReason {
  /** Primary key. Foreign key to SalesOrderHeader.SalesOrderID. */
  salesOrderID!: number;
  /** Primary key. Foreign key to SalesReason.SalesReasonID. */
  salesReasonID!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  salesOrderHeader?: SalesOrderHeader;
  salesReason?: SalesReason;

}

export interface ISalesOrderHeaderSalesReason {
  /** Primary key. Foreign key to SalesOrderHeader.SalesOrderID. */
  salesOrderID: number;
  /** Primary key. Foreign key to SalesReason.SalesReasonID. */
  salesReasonID: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  salesOrderHeader?: SalesOrderHeader;
  salesReason?: SalesReason;
}
