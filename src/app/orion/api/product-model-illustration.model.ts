import {ProductModel} from "./product-model.model";
import {Illustration} from "./illustration.model";

export class ProductModelIllustration implements IProductModelIllustration {
  /** Primary key. Foreign key to ProductModel.ProductModelID. */
  productModelID!: number;
  /** Primary key. Foreign key to Illustration.IllustrationID. */
  illustrationID!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productModel?: ProductModel;
  illustration?: Illustration;

}

export interface IProductModelIllustration {
  /** Primary key. Foreign key to ProductModel.ProductModelID. */
  productModelID: number;
  /** Primary key. Foreign key to Illustration.IllustrationID. */
  illustrationID: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  productModel?: ProductModel;
  illustration?: Illustration;
}
