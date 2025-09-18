import {Product} from "./product";

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
