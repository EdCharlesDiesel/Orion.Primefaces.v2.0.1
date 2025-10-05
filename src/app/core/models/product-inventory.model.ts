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
