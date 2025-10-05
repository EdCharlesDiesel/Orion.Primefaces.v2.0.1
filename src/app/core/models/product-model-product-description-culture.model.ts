import {ProductModel} from "./product-model.model";
import {ProductDescription} from "./product-description.model";
import {Culture} from "./culture.model";

export class ProductModelProductDescriptionCulture implements IProductModelProductDescriptionCulture {
  /** Primary key. Foreign key to ProductModel.ProductModelID. */
  productModelID!: number;
  /** Primary key. Foreign key to ProductDescription.ProductDescriptionID. */
  productDescriptionID!: number;
  /** Culture identification number. Foreign key to Culture.CultureID. */
  cultureID!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productModel?: ProductModel;
  productDescription?: ProductDescription;
  culture?: Culture;

}

export interface IProductModelProductDescriptionCulture {
  /** Primary key. Foreign key to ProductModel.ProductModelID. */
  productModelID: number;
  /** Primary key. Foreign key to ProductDescription.ProductDescriptionID. */
  productDescriptionID: number;
  /** Culture identification number. Foreign key to Culture.CultureID. */
  cultureID: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  productModel?: ProductModel;
  productDescription?: ProductDescription;
  culture?: Culture;
}
