import {Product} from "./product";
import {SqlHierarchyId} from "./SqlHierarchyId";

export class ProductDocument implements IProductDocument {
  /** Product identification number. Foreign key to Product.ProductID. */
  productID!: number;
  documentNode!: SqlHierarchyId;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;
  document?: Document;

  constructor(data?: IProductDocument) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
    if (!data) {
      this.documentNode = new SqlHierarchyId();
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productID = _data["productID"];
      this.documentNode = _data["documentNode"] ? SqlHierarchyId.fromJS(_data["documentNode"]) : new SqlHierarchyId();
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.product = _data["product"] ? Product.fromJS(_data["product"]) : undefined as any;
      this.document = _data["document"] ? Document.fromJS(_data["document"]) : undefined as any;
    }
  }

  static fromJS(data: any): ProductDocument {
    data = typeof data === 'object' ? data : {};
    let result = new ProductDocument();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productID"] = this.productID;
    data["documentNode"] = this.documentNode ? this.documentNode.toJSON() : undefined as any;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["product"] = this.product ? this.product.toJSON() : undefined as any;
    data["document"] = this.document ? this.document.toJSON() : undefined as any;
    return data;
  }
}

export interface IProductDocument {
  /** Product identification number. Foreign key to Product.ProductID. */
  productID: number;
  documentNode: SqlHierarchyId;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
  document?: Document;
}
