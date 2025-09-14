import {ProductModelProductDescriptionCulture} from "./product-model-product-description-culture.model";

export class ProductDescription implements IProductDescription {
  /** Primary key for ProductDescription records. */
  productDescriptionID!: number;
  /** Description of the product. */
  description!: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productModelProductDescriptionCultures?: ProductModelProductDescriptionCulture[] | undefined;

  constructor(data?: IProductDescription) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productDescriptionID = _data["productDescriptionID"];
      this.description = _data["description"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["productModelProductDescriptionCultures"])) {
        this.productModelProductDescriptionCultures = [] as any;
        for (let item of _data["productModelProductDescriptionCultures"])
          this.productModelProductDescriptionCultures!.push(ProductModelProductDescriptionCulture.fromJS(item));
      }
    }
  }

  static fromJS(data: any): ProductDescription {
    data = typeof data === 'object' ? data : {};
    let result = new ProductDescription();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productDescriptionID"] = this.productDescriptionID;
    data["description"] = this.description;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.productModelProductDescriptionCultures)) {
      data["productModelProductDescriptionCultures"] = [];
      for (let item of this.productModelProductDescriptionCultures)
        data["productModelProductDescriptionCultures"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
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
