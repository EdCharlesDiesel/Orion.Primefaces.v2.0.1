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

  constructor(data?: IProductProductPhoto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productID = _data["productID"];
      this.productPhotoID = _data["productPhotoID"];
      this.primary = _data["primary"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.product = _data["product"] ? Product.fromJS(_data["product"]) : undefined as any;
      this.productPhoto = _data["productPhoto"] ? ProductPhoto.fromJS(_data["productPhoto"]) : undefined as any;
    }
  }

  static fromJS(data: any): ProductProductPhoto {
    data = typeof data === 'object' ? data : {};
    let result = new ProductProductPhoto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productID"] = this.productID;
    data["productPhotoID"] = this.productPhotoID;
    data["primary"] = this.primary;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["product"] = this.product ? this.product.toJSON() : undefined as any;
    data["productPhoto"] = this.productPhoto ? this.productPhoto.toJSON() : undefined as any;
    return data;
  }
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
