import {ProductModel} from "./product-model.model";

export class ProductModelIllustration implements IProductModelIllustration {
  /** Primary key. Foreign key to ProductModel.ProductModelID. */
  productModelID!: number;
  /** Primary key. Foreign key to Illustration.IllustrationID. */
  illustrationID!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productModel?: ProductModel;
  illustration?: Illustration;

  constructor(data?: IProductModelIllustration) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productModelID = _data["productModelID"];
      this.illustrationID = _data["illustrationID"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.productModel = _data["productModel"] ? ProductModel.fromJS(_data["productModel"]) : undefined as any;
      this.illustration = _data["illustration"] ? Illustration.fromJS(_data["illustration"]) : undefined as any;
    }
  }

  static fromJS(data: any): ProductModelIllustration {
    data = typeof data === 'object' ? data : {};
    let result = new ProductModelIllustration();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productModelID"] = this.productModelID;
    data["illustrationID"] = this.illustrationID;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["productModel"] = this.productModel ? this.productModel.toJSON() : undefined as any;
    data["illustration"] = this.illustration ? this.illustration.toJSON() : undefined as any;
    return data;
  }
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
