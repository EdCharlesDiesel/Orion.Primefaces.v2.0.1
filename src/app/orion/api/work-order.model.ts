import {WorkOrderRouting} from "./WorkOrderRouting";
import {ScrapReason} from "./scrap-reason";
import {Product} from "./product";

export class WorkOrder {
  /** Primary key for WorkOrder records. */
  workOrderID!: number;
  /** Product identification number. Foreign key to Product.ProductID. */
  productID!: number;
  /** Product quantity to build. */
  orderQty!: number;
  /** Quantity built and put in inventory. */
  stockedQty!: number;
  /** Quantity that failed inspection. */
  scrappedQty!: number;
  /** Work order start date. */
  startDate!: Date;
  /** Work order end date. */
  endDate?: Date | undefined;
  /** Work order due date. */
  dueDate!: Date;
  /** Reason for inspection failure. */
  scrapReasonID?: number | undefined;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;
  scrapReason?: ScrapReason;
  workOrderRoutings?: WorkOrderRouting[] | undefined;

}

export interface IWorkOrder {
  /** Primary key for WorkOrder records. */
  workOrderID: number;
  /** Product identification number. Foreign key to Product.ProductID. */
  productID: number;
  /** Product quantity to build. */
  orderQty: number;
  /** Quantity built and put in inventory. */
  stockedQty: number;
  /** Quantity that failed inspection. */
  scrappedQty: number;
  /** Work order start date. */
  startDate: Date;
  /** Work order end date. */
  endDate?: Date | undefined;
  /** Work order due date. */
  dueDate: Date;
  /** Reason for inspection failure. */
  scrapReasonID?: number | undefined;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
  scrapReason?: ScrapReason;
  workOrderRoutings?: WorkOrderRouting[] | undefined;
}
