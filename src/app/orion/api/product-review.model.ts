export class ProductReview implements IProductReview {
  /** Primary key for ProductReview records. */
  productReviewID!: number;
  /** Product identification number. Foreign key to Product.ProductID. */
  productID!: number;
  /** Name of the reviewer. */
  reviewerName!: string;
  /** Date review was submitted. */
  reviewDate!: Date;
  /** Reviewer's e-mail address. */
  emailAddress!: string;
  /** Product rating given by the reviewer. Scale is 1 to 5 with 5 as the highest rating. */
  rating!: number;
  /** Reviewer's comments */
  comments?: string | undefined;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;

  constructor(data?: IProductReview) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productReviewID = _data["productReviewID"];
      this.productID = _data["productID"];
      this.reviewerName = _data["reviewerName"];
      this.reviewDate = _data["reviewDate"] ? new Date(_data["reviewDate"].toString()) : undefined as any;
      this.emailAddress = _data["emailAddress"];
      this.rating = _data["rating"];
      this.comments = _data["comments"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.product = _data["product"] ? Product.fromJS(_data["product"]) : undefined as any;
    }
  }

  static fromJS(data: any): ProductReview {
    data = typeof data === 'object' ? data : {};
    let result = new ProductReview();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productReviewID"] = this.productReviewID;
    data["productID"] = this.productID;
    data["reviewerName"] = this.reviewerName;
    data["reviewDate"] = this.reviewDate ? this.reviewDate.toISOString() : undefined as any;
    data["emailAddress"] = this.emailAddress;
    data["rating"] = this.rating;
    data["comments"] = this.comments;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["product"] = this.product ? this.product.toJSON() : undefined as any;
    return data;
  }
}

export interface IProductReview {
  /** Primary key for ProductReview records. */
  productReviewID: number;
  /** Product identification number. Foreign key to Product.ProductID. */
  productID: number;
  /** Name of the reviewer. */
  reviewerName: string;
  /** Date review was submitted. */
  reviewDate: Date;
  /** Reviewer's e-mail address. */
  emailAddress: string;
  /** Product rating given by the reviewer. Scale is 1 to 5 with 5 as the highest rating. */
  rating: number;
  /** Reviewer's comments */
  comments?: string | undefined;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
}
