import {ProductInventory} from "./product-inventory.model";
import {WorkOrderRoutingModel} from "./work-order-routing.model";

export class Location  {
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
  workOrderRoutings?: WorkOrderRoutingModel[] | undefined;

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
  workOrderRoutings?: WorkOrderRoutingModel[] | undefined;
}
