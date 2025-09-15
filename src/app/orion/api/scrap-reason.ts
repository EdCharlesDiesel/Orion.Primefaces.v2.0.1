import {WorkOrder} from "./work-order.model";

export class ScrapReason implements IScrapReason {
  /** Primary key for ScrapReason records. */
  scrapReasonID!: number;
  /** Failure description. */
  name!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  workOrders?: WorkOrder[] | undefined;

}

export interface IScrapReason {
  /** Primary key for ScrapReason records. */
  scrapReasonID: number;
  /** Failure description. */
  name: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  workOrders?: WorkOrder[] | undefined;
}
