import {ProductModelProductDescriptionCulture} from "./product-model-product-description-culture.model";

export class ProductDescription {
  /** Primary key for ProductDescription records. */
  productDescriptionID!: number;
  /** Description of the product. */
  description!: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productModelProductDescriptionCultures?: ProductModelProductDescriptionCulture[] | undefined;

}

export interface IProductDescription {
  /** Primary key for ProductDescription records. */
  productDescriptionID: number;
  /** Description of the product. */
  description: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  productModelProductDescriptionCultures?: ProductModelProductDescriptionCulture[] | undefined;
}
