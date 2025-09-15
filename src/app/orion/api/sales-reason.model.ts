import {SalesOrderHeaderSalesReason} from "./sales-order-header-sales-reason.model";

export class SalesReason implements ISalesReason {
  /** Primary key for SalesReason records. */
  salesReasonID!: number;
  /** Sales reason description. */
  name!: string;
  /** Category the sales reason belongs to. */
  reasonType!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  salesOrderHeaderSalesReasons?: SalesOrderHeaderSalesReason[] | undefined;

}

export interface ISalesReason {
  /** Primary key for SalesReason records. */
  salesReasonID: number;
  /** Sales reason description. */
  name: string;
  /** Category the sales reason belongs to. */
  reasonType: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  salesOrderHeaderSalesReasons?: SalesOrderHeaderSalesReason[] | undefined;
}
