import {ProductInventory} from "./product-inventory.model";
import {WorkOrderRouting} from "./WorkOrderRouting";

export class Location implements ILocation {
  /** Primary key for Location records. */
  locationID!: number;
  /** Location description. */
  name!: string;
  /** Standard hourly cost of the manufacturing location. */
  costRate!: number;
  /** Work capacity (in hours) of the manufacturing location. */
  availability!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productInventories?: ProductInventory[] | undefined;
  workOrderRoutings?: WorkOrderRouting[] | undefined;

  constructor(data?: ILocation) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.locationID = _data["locationID"];
      this.name = _data["name"];
      this.costRate = _data["costRate"];
      this.availability = _data["availability"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["productInventories"])) {
        this.productInventories = [] as any;
        for (let item of _data["productInventories"])
          this.productInventories!.push(ProductInventory.fromJS(item));
      }
      if (Array.isArray(_data["workOrderRoutings"])) {
        this.workOrderRoutings = [] as any;
        for (let item of _data["workOrderRoutings"])
          this.workOrderRoutings!.push(WorkOrderRouting.fromJS(item));
      }
    }
  }

  static fromJS(data: any): Location {
    data = typeof data === 'object' ? data : {};
    let result = new Location();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["locationID"] = this.locationID;
    data["name"] = this.name;
    data["costRate"] = this.costRate;
    data["availability"] = this.availability;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.productInventories)) {
      data["productInventories"] = [];
      for (let item of this.productInventories)
        data["productInventories"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.workOrderRoutings)) {
      data["workOrderRoutings"] = [];
      for (let item of this.workOrderRoutings)
        data["workOrderRoutings"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface ILocation {
  /** Primary key for Location records. */
  locationID: number;
  /** Location description. */
  name: string;
  /** Standard hourly cost of the manufacturing location. */
  costRate: number;
  /** Work capacity (in hours) of the manufacturing location. */
  availability: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  productInventories?: ProductInventory[] | undefined;
  workOrderRoutings?: WorkOrderRouting[] | undefined;
}
