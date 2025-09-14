export class ShoppingCartItem implements IShoppingCartItem {
  /** Primary key for ShoppingCartItem records. */
  shoppingCartItemID!: number;
  /** Shopping cart identification number. */
  shoppingCartID!: string;
  /** Product quantity ordered. */
  quantity!: number;
  /** Product ordered. Foreign key to Product.ProductID. */
  productID!: number;
  /** Date the time the record was created. */
  dateCreated!: Date;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;

  constructor(data?: IShoppingCartItem) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.shoppingCartItemID = _data["shoppingCartItemID"];
      this.shoppingCartID = _data["shoppingCartID"];
      this.quantity = _data["quantity"];
      this.productID = _data["productID"];
      this.dateCreated = _data["dateCreated"] ? new Date(_data["dateCreated"].toString()) : undefined as any;
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.product = _data["product"] ? Product.fromJS(_data["product"]) : undefined as any;
    }
  }

  static fromJS(data: any): ShoppingCartItem {
    data = typeof data === 'object' ? data : {};
    let result = new ShoppingCartItem();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["shoppingCartItemID"] = this.shoppingCartItemID;
    data["shoppingCartID"] = this.shoppingCartID;
    data["quantity"] = this.quantity;
    data["productID"] = this.productID;
    data["dateCreated"] = this.dateCreated ? this.dateCreated.toISOString() : undefined as any;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["product"] = this.product ? this.product.toJSON() : undefined as any;
    return data;
  }
}

export interface IShoppingCartItem {
  /** Primary key for ShoppingCartItem records. */
  shoppingCartItemID: number;
  /** Shopping cart identification number. */
  shoppingCartID: string;
  /** Product quantity ordered. */
  quantity: number;
  /** Product ordered. Foreign key to Product.ProductID. */
  productID: number;
  /** Date the time the record was created. */
  dateCreated: Date;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
}
