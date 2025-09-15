import {ProductProductPhoto} from "./product-product-photo.model";

export class ProductPhoto implements IProductPhoto {
  /** Primary key for ProductPhoto records. */
  productPhotoID!: number;
  /** Small image of the product. */
  thumbNailPhoto?: string | undefined;
  /** Small image file name. */
  thumbnailPhotoFileName?: string | undefined;
  /** Large image of the product. */
  largePhoto?: string | undefined;
  /** Large image file name. */
  largePhotoFileName?: string | undefined;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productProductPhotos?: ProductProductPhoto[] | undefined;

}

export interface IProductPhoto {
  /** Primary key for ProductPhoto records. */
  productPhotoID: number;
  /** Small image of the product. */
  thumbNailPhoto?: string | undefined;
  /** Small image file name. */
  thumbnailPhotoFileName?: string | undefined;
  /** Large image of the product. */
  largePhoto?: string | undefined;
  /** Large image file name. */
  largePhotoFileName?: string | undefined;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  productProductPhotos?: ProductProductPhoto[] | undefined;
}
