export class ScrapReason implements IScrapReason {
  /** Primary key for ScrapReason records. */
  scrapReasonID!: number;
  /** Failure description. */
  name!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  workOrders?: WorkOrder[] | undefined;

  constructor(data?: IScrapReason) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.scrapReasonID = _data["scrapReasonID"];
      this.name = _data["name"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["workOrders"])) {
        this.workOrders = [] as any;
        for (let item of _data["workOrders"])
          this.workOrders!.push(WorkOrder.fromJS(item));
      }
    }
  }

  static fromJS(data: any): ScrapReason {
    data = typeof data === 'object' ? data : {};
    let result = new ScrapReason();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["scrapReasonID"] = this.scrapReasonID;
    data["name"] = this.name;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.workOrders)) {
      data["workOrders"] = [];
      for (let item of this.workOrders)
        data["workOrders"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
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
