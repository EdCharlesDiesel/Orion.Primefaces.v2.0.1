import {PurchaseOrderHeader} from "./purchase-order-header.model";
import {SalesOrderHeader} from "./sale-order-header.model";

export class ShipMethod  {
  /** Primary key for ShipMethod records. */
  shipMethodID!: number;
  /** Shipping company name. */
  name!: string;
  /** Minimum shipping charge. */
  shipBase!: number;
  /** Shipping charge per pound. */
  shipRate!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  purchaseOrderHeaders?: PurchaseOrderHeader[] | undefined;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;

}

export interface IShipMethod {
  /** Primary key for ShipMethod records. */
  shipMethodID: number;
  /** Shipping company name. */
  name: string;
  /** Minimum shipping charge. */
  shipBase: number;
  /** Shipping charge per pound. */
  shipRate: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  purchaseOrderHeaders?: PurchaseOrderHeader[] | undefined;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;
}
