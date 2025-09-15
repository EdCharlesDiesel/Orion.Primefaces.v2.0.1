import {ProductSubcategory} from "./product-subcategory.model";

export class ProductCategory  {
  /** Primary key for ProductCategory records. */
  productCategoryID!: number;
  /** Category description. */
  name!: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productSubcategories?: ProductSubcategory[] | undefined;

}

export interface IProductCategory {
  /** Primary key for ProductCategory records. */
  productCategoryID: number;
  /** Category description. */
  name: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  productSubcategories?: ProductSubcategory[] | undefined;
}
