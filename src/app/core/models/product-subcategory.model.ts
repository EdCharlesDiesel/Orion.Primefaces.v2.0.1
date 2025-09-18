import {Product} from "./product";
import {ProductCategory} from "./product-category.model";

export class ProductSubcategory implements IProductSubcategory {
  /** Primary key for ProductSubcategory records. */
  productSubcategoryID!: number;
  /** Product category identification number. Foreign key to ProductCategory.ProductCategoryID. */
  productCategoryID!: number;
  /** Subcategory description. */
  name!: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productCategory?: ProductCategory;
  products?: Product[] | undefined;

}

export interface IProductSubcategory {
  /** Primary key for ProductSubcategory records. */
  productSubcategoryID: number;
  /** Product category identification number. Foreign key to ProductCategory.ProductCategoryID. */
  productCategoryID: number;
  /** Subcategory description. */
  name: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  productCategory?: ProductCategory;
  products?: Product[] | undefined;
}
