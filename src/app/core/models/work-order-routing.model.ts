import {WorkOrder} from "./work-order.model";

export class WorkOrderRoutingModel implements IWorkOrderRouting {
  /** Primary key. Foreign key to WorkOrder.WorkOrderID. */
  workOrderID!: number;
  /** Primary key. Foreign key to Product.ProductID. */
  productID!: number;
  /** Primary key. Indicates the manufacturing process sequence. */
  operationSequence!: number;
  /** Manufacturing location where the part is processed. Foreign key to Location.LocationID. */
  locationID!: number;
  /** Planned manufacturing start date. */
  scheduledStartDate!: Date;
  /** Planned manufacturing end date. */
  scheduledEndDate!: Date;
  /** Actual start date. */
  actualStartDate?: Date | undefined;
  /** Actual end date. */
  actualEndDate?: Date | undefined;
  /** Number of manufacturing hours used. */
  actualResourceHrs?: number | undefined;
  /** Estimated manufacturing cost. */
  plannedCost!: number;
  /** Actual manufacturing cost. */
  actualCost?: number | undefined;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  workOrder?: WorkOrder;
  location?: Location;

}

export interface IWorkOrderRouting {
  /** Primary key. Foreign key to WorkOrder.WorkOrderID. */
  workOrderID: number;
  /** Primary key. Foreign key to Product.ProductID. */
  productID: number;
  /** Primary key. Indicates the manufacturing process sequence. */
  operationSequence: number;
  /** Manufacturing location where the part is processed. Foreign key to Location.LocationID. */
  locationID: number;
  /** Planned manufacturing start date. */
  scheduledStartDate: Date;
  /** Planned manufacturing end date. */
  scheduledEndDate: Date;
  /** Actual start date. */
  actualStartDate?: Date | undefined;
  /** Actual end date. */
  actualEndDate?: Date | undefined;
  /** Number of manufacturing hours used. */
  actualResourceHrs?: number | undefined;
  /** Estimated manufacturing cost. */
  plannedCost: number;
  /** Actual manufacturing cost. */
  actualCost?: number | undefined;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  workOrder?: WorkOrder;
  location?: Location;
}
