import {ProductModelIllustration} from "./product-model-illustration.model";
import {Product} from "./product";
import {ProductModelProductDescriptionCulture} from "./product-model-product-description-culture.model";

export class ProductModel implements IProductModel {
  /** Primary key for ProductModel records. */
  productModelID!: number;
  /** Product model description. */
  name!: string;
  /** Detailed product catalog information in xml format. */
  catalogDescription?: string | undefined;
  /** Manufacturing instructions in xml format. */
  instructions?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  products?: Product[] | undefined;
  productModelIllustrations?: ProductModelIllustration[] | undefined;
  productModelProductDescriptionCultures?: ProductModelProductDescriptionCulture[] | undefined;

}

export interface IProductModel {
  /** Primary key for ProductModel records. */
  productModelID: number;
  /** Product model description. */
  name: string;
  /** Detailed product catalog information in xml format. */
  catalogDescription?: string | undefined;
  /** Manufacturing instructions in xml format. */
  instructions?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  products?: Product[] | undefined;
  productModelIllustrations?: ProductModelIllustration[] | undefined;
  productModelProductDescriptionCultures?: ProductModelProductDescriptionCulture[] | undefined;
}
