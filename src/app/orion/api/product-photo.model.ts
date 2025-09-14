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

  constructor(data?: IProductPhoto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productPhotoID = _data["productPhotoID"];
      this.thumbNailPhoto = _data["thumbNailPhoto"];
      this.thumbnailPhotoFileName = _data["thumbnailPhotoFileName"];
      this.largePhoto = _data["largePhoto"];
      this.largePhotoFileName = _data["largePhotoFileName"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["productProductPhotos"])) {
        this.productProductPhotos = [] as any;
        for (let item of _data["productProductPhotos"])
          this.productProductPhotos!.push(ProductProductPhoto.fromJS(item));
      }
    }
  }

  static fromJS(data: any): ProductPhoto {
    data = typeof data === 'object' ? data : {};
    let result = new ProductPhoto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productPhotoID"] = this.productPhotoID;
    data["thumbNailPhoto"] = this.thumbNailPhoto;
    data["thumbnailPhotoFileName"] = this.thumbnailPhotoFileName;
    data["largePhoto"] = this.largePhoto;
    data["largePhotoFileName"] = this.largePhotoFileName;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.productProductPhotos)) {
      data["productProductPhotos"] = [];
      for (let item of this.productProductPhotos)
        data["productProductPhotos"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
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
