import {ProductSubcategory} from "./product-subcategory.model";

export class ProductCategory implements IProductCategory {
  /** Primary key for ProductCategory records. */
  productCategoryID!: number;
  /** Category description. */
  name!: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productSubcategories?: ProductSubcategory[] | undefined;

  constructor(data?: IProductCategory) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productCategoryID = _data["productCategoryID"];
      this.name = _data["name"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["productSubcategories"])) {
        this.productSubcategories = [] as any;
        for (let item of _data["productSubcategories"])
          this.productSubcategories!.push(ProductSubcategory.fromJS(item));
      }
    }
  }

  static fromJS(data: any): ProductCategory {
    data = typeof data === 'object' ? data : {};
    let result = new ProductCategory();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productCategoryID"] = this.productCategoryID;
    data["name"] = this.name;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.productSubcategories)) {
      data["productSubcategories"] = [];
      for (let item of this.productSubcategories)
        data["productSubcategories"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface IProductCategory {
  /** Primary key for ProductCategory records. */
  productCategoryID: number;
  /** Category description. */
  name: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  productSubcategories?: ProductSubcategory[] | undefined;
}
