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

  constructor(data?: IProductModel) {
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
      this.name = _data["name"];
      this.catalogDescription = _data["catalogDescription"];
      this.instructions = _data["instructions"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["products"])) {
        this.products = [] as any;
        for (let item of _data["products"])
          this.products!.push(Product.fromJS(item));
      }
      if (Array.isArray(_data["productModelIllustrations"])) {
        this.productModelIllustrations = [] as any;
        for (let item of _data["productModelIllustrations"])
          this.productModelIllustrations!.push(ProductModelIllustration.fromJS(item));
      }
      if (Array.isArray(_data["productModelProductDescriptionCultures"])) {
        this.productModelProductDescriptionCultures = [] as any;
        for (let item of _data["productModelProductDescriptionCultures"])
          this.productModelProductDescriptionCultures!.push(ProductModelProductDescriptionCulture.fromJS(item));
      }
    }
  }

  static fromJS(data: any): ProductModel {
    data = typeof data === 'object' ? data : {};
    let result = new ProductModel();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productModelID"] = this.productModelID;
    data["name"] = this.name;
    data["catalogDescription"] = this.catalogDescription;
    data["instructions"] = this.instructions;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.products)) {
      data["products"] = [];
      for (let item of this.products)
        data["products"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.productModelIllustrations)) {
      data["productModelIllustrations"] = [];
      for (let item of this.productModelIllustrations)
        data["productModelIllustrations"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.productModelProductDescriptionCultures)) {
      data["productModelProductDescriptionCultures"] = [];
      for (let item of this.productModelProductDescriptionCultures)
        data["productModelProductDescriptionCultures"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
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
