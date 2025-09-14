export class WorkOrder implements IWorkOrder {
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

  constructor(data?: IWorkOrder) {
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
      this.orderQty = _data["orderQty"];
      this.stockedQty = _data["stockedQty"];
      this.scrappedQty = _data["scrappedQty"];
      this.startDate = _data["startDate"] ? new Date(_data["startDate"].toString()) : undefined as any;
      this.endDate = _data["endDate"] ? new Date(_data["endDate"].toString()) : undefined as any;
      this.dueDate = _data["dueDate"] ? new Date(_data["dueDate"].toString()) : undefined as any;
      this.scrapReasonID = _data["scrapReasonID"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.product = _data["product"] ? Product.fromJS(_data["product"]) : undefined as any;
      this.scrapReason = _data["scrapReason"] ? ScrapReason.fromJS(_data["scrapReason"]) : undefined as any;
      if (Array.isArray(_data["workOrderRoutings"])) {
        this.workOrderRoutings = [] as any;
        for (let item of _data["workOrderRoutings"])
          this.workOrderRoutings!.push(WorkOrderRouting.fromJS(item));
      }
    }
  }

  static fromJS(data: any): WorkOrder {
    data = typeof data === 'object' ? data : {};
    let result = new WorkOrder();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["workOrderID"] = this.workOrderID;
    data["productID"] = this.productID;
    data["orderQty"] = this.orderQty;
    data["stockedQty"] = this.stockedQty;
    data["scrappedQty"] = this.scrappedQty;
    data["startDate"] = this.startDate ? this.startDate.toISOString() : undefined as any;
    data["endDate"] = this.endDate ? this.endDate.toISOString() : undefined as any;
    data["dueDate"] = this.dueDate ? this.dueDate.toISOString() : undefined as any;
    data["scrapReasonID"] = this.scrapReasonID;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["product"] = this.product ? this.product.toJSON() : undefined as any;
    data["scrapReason"] = this.scrapReason ? this.scrapReason.toJSON() : undefined as any;
    if (Array.isArray(this.workOrderRoutings)) {
      data["workOrderRoutings"] = [];
      for (let item of this.workOrderRoutings)
        data["workOrderRoutings"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
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
