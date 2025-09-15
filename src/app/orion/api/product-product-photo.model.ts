import {ProductPhoto} from "./product-photo.model";
import {Product} from "./product";

export class ProductProductPhoto implements IProductProductPhoto {
  /** Product identification number. Foreign key to Product.ProductID. */
  productID!: number;
  /** Product photo identification number. Foreign key to ProductPhoto.ProductPhotoID. */
  productPhotoID!: number;
  /** 0 = Photo is not the principal image. 1 = Photo is the principal image. */
  primary!: boolean;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;
  productPhoto?: ProductPhoto;

}

export interface IProductProductPhoto {
  /** Product identification number. Foreign key to Product.ProductID. */
  productID: number;
  /** Product photo identification number. Foreign key to ProductPhoto.ProductPhotoID. */
  productPhotoID: number;
  /** 0 = Photo is not the principal image. 1 = Photo is the principal image. */
  primary: boolean;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
  productPhoto?: ProductPhoto;
}
