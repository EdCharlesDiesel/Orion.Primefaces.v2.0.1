import {WorkOrder} from "./work-order.model";

export class WorkOrderRouting implements IWorkOrderRouting {
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

  constructor(data?: IWorkOrderRouting) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.workOrderID = _data["workOrderID"];
      this.productID = _data["productID"];
      this.operationSequence = _data["operationSequence"];
      this.locationID = _data["locationID"];
      this.scheduledStartDate = _data["scheduledStartDate"] ? new Date(_data["scheduledStartDate"].toString()) : undefined as any;
      this.scheduledEndDate = _data["scheduledEndDate"] ? new Date(_data["scheduledEndDate"].toString()) : undefined as any;
      this.actualStartDate = _data["actualStartDate"] ? new Date(_data["actualStartDate"].toString()) : undefined as any;
      this.actualEndDate = _data["actualEndDate"] ? new Date(_data["actualEndDate"].toString()) : undefined as any;
      this.actualResourceHrs = _data["actualResourceHrs"];
      this.plannedCost = _data["plannedCost"];
      this.actualCost = _data["actualCost"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.workOrder = _data["workOrder"] ? WorkOrder.fromJS(_data["workOrder"]) : undefined as any;
      this.location = _data["location"] ? Location.fromJS(_data["location"]) : undefined as any;
    }
  }

  static fromJS(data: any): WorkOrderRouting {
    data = typeof data === 'object' ? data : {};
    let result = new WorkOrderRouting();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["workOrderID"] = this.workOrderID;
    data["productID"] = this.productID;
    data["operationSequence"] = this.operationSequence;
    data["locationID"] = this.locationID;
    data["scheduledStartDate"] = this.scheduledStartDate ? this.scheduledStartDate.toISOString() : undefined as any;
    data["scheduledEndDate"] = this.scheduledEndDate ? this.scheduledEndDate.toISOString() : undefined as any;
    data["actualStartDate"] = this.actualStartDate ? this.actualStartDate.toISOString() : undefined as any;
    data["actualEndDate"] = this.actualEndDate ? this.actualEndDate.toISOString() : undefined as any;
    data["actualResourceHrs"] = this.actualResourceHrs;
    data["plannedCost"] = this.plannedCost;
    data["actualCost"] = this.actualCost;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["workOrder"] = this.workOrder ? this.workOrder.toJSON() : undefined as any;
    data["location"] = this.location ? this.location.toJSON() : undefined as any;
    return data;
  }
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
