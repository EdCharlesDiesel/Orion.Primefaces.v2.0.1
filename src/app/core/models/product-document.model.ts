import {Product} from "./product";
import {SqlHierarchyId} from "./SqlHierarchyId";

export class ProductDocument implements IProductDocument {
  /** Product identification number. Foreign key to Product.ProductID. */
  productID!: number;
  documentNode!: SqlHierarchyId;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;
  document?: Document;

}

export interface IProductDocument {
  /** Product identification number. Foreign key to Product.ProductID. */
  productID: number;
  documentNode: SqlHierarchyId;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
  document?: Document;
}
