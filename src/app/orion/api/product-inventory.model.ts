import {Product} from "./product";

export class ProductInventory implements IProductInventory {
  /** Product identification number. Foreign key to Product.ProductID. */
  productID!: number;
  /** Inventory location identification number. Foreign key to Location.LocationID.  */
  locationID!: number;
  /** Storage compartment within an inventory location. */
  shelf!: string;
  /** Storage container on a shelf in an inventory location. */
  bin!: number;
  /** Quantity of products in the inventory location. */
  quantity!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;
  location?: Location;

  constructor(data?: IProductInventory) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productID = _data["productID"];
      this.locationID = _data["locationID"];
      this.shelf = _data["shelf"];
      this.bin = _data["bin"];
      this.quantity = _data["quantity"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.product = _data["product"] ? Product.fromJS(_data["product"]) : undefined as any;
      this.location = _data["location"] ? Location.fromJS(_data["location"]) : undefined as any;
    }
  }

  static fromJS(data: any): ProductInventory {
    data = typeof data === 'object' ? data : {};
    let result = new ProductInventory();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productID"] = this.productID;
    data["locationID"] = this.locationID;
    data["shelf"] = this.shelf;
    data["bin"] = this.bin;
    data["quantity"] = this.quantity;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["product"] = this.product ? this.product.toJSON() : undefined as any;
    data["location"] = this.location ? this.location.toJSON() : undefined as any;
    return data;
  }
}

export interface IProductInventory {
  /** Product identification number. Foreign key to Product.ProductID. */
  productID: number;
  /** Inventory location identification number. Foreign key to Location.LocationID.  */
  locationID: number;
  /** Storage compartment within an inventory location. */
  shelf: string;
  /** Storage container on a shelf in an inventory location. */
  bin: number;
  /** Quantity of products in the inventory location. */
  quantity: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
  location?: Location;
}
