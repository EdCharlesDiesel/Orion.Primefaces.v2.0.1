import {ProductModel} from "./product-model.model";
import {ProductDescription} from "./product-description.model";

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

  constructor(data?: IProductModelProductDescriptionCulture) {
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
      this.productDescriptionID = _data["productDescriptionID"];
      this.cultureID = _data["cultureID"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.productModel = _data["productModel"] ? ProductModel.fromJS(_data["productModel"]) : undefined as any;
      this.productDescription = _data["productDescription"] ? ProductDescription.fromJS(_data["productDescription"]) : undefined as any;
      this.culture = _data["culture"] ? Culture.fromJS(_data["culture"]) : undefined as any;
    }
  }

  static fromJS(data: any): ProductModelProductDescriptionCulture {
    data = typeof data === 'object' ? data : {};
    let result = new ProductModelProductDescriptionCulture();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productModelID"] = this.productModelID;
    data["productDescriptionID"] = this.productDescriptionID;
    data["cultureID"] = this.cultureID;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["productModel"] = this.productModel ? this.productModel.toJSON() : undefined as any;
    data["productDescription"] = this.productDescription ? this.productDescription.toJSON() : undefined as any;
    data["culture"] = this.culture ? this.culture.toJSON() : undefined as any;
    return data;
  }
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
