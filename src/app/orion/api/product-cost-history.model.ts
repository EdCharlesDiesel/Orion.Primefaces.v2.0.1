import {Product} from "./product";

export class ProductCostHistory implements IProductCostHistory {
  /** Product identification number. Foreign key to Product.ProductID */
  productID!: number;
  /** Product cost start date. */
  startDate!: Date;
  /** Product cost end date. */
  endDate?: Date | undefined;
  /** Standard cost of the product. */
  standardCost!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;

  constructor(data?: IProductCostHistory) {
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
      this.startDate = _data["startDate"] ? new Date(_data["startDate"].toString()) : undefined as any;
      this.endDate = _data["endDate"] ? new Date(_data["endDate"].toString()) : undefined as any;
      this.standardCost = _data["standardCost"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.product = _data["product"] ? Product.fromJS(_data["product"]) : undefined as any;
    }
  }

  static fromJS(data: any): ProductCostHistory {
    data = typeof data === 'object' ? data : {};
    let result = new ProductCostHistory();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productID"] = this.productID;
    data["startDate"] = this.startDate ? this.startDate.toISOString() : undefined as any;
    data["endDate"] = this.endDate ? this.endDate.toISOString() : undefined as any;
    data["standardCost"] = this.standardCost;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["product"] = this.product ? this.product.toJSON() : undefined as any;
    return data;
  }
}

export interface IProductCostHistory {
  /** Product identification number. Foreign key to Product.ProductID */
  productID: number;
  /** Product cost start date. */
  startDate: Date;
  /** Product cost end date. */
  endDate?: Date | undefined;
  /** Standard cost of the product. */
  standardCost: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
}
