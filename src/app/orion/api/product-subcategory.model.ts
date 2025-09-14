import {Product} from "./product";

export class ProductSubcategory implements IProductSubcategory {
  /** Primary key for ProductSubcategory records. */
  productSubcategoryID!: number;
  /** Product category identification number. Foreign key to ProductCategory.ProductCategoryID. */
  productCategoryID!: number;
  /** Subcategory description. */
  name!: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productCategory?: ProductCategory;
  products?: Product[] | undefined;

  constructor(data?: IProductSubcategory) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productSubcategoryID = _data["productSubcategoryID"];
      this.productCategoryID = _data["productCategoryID"];
      this.name = _data["name"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.productCategory = _data["productCategory"] ? ProductCategory.fromJS(_data["productCategory"]) : undefined as any;
      if (Array.isArray(_data["products"])) {
        this.products = [] as any;
        for (let item of _data["products"])
          this.products!.push(Product.fromJS(item));
      }
    }
  }

  static fromJS(data: any): ProductSubcategory {
    data = typeof data === 'object' ? data : {};
    let result = new ProductSubcategory();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productSubcategoryID"] = this.productSubcategoryID;
    data["productCategoryID"] = this.productCategoryID;
    data["name"] = this.name;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["productCategory"] = this.productCategory ? this.productCategory.toJSON() : undefined as any;
    if (Array.isArray(this.products)) {
      data["products"] = [];
      for (let item of this.products)
        data["products"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface IProductSubcategory {
  /** Primary key for ProductSubcategory records. */
  productSubcategoryID: number;
  /** Product category identification number. Foreign key to ProductCategory.ProductCategoryID. */
  productCategoryID: number;
  /** Subcategory description. */
  name: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  productCategory?: ProductCategory;
  products?: Product[] | undefined;
}
