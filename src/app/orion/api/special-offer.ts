import {SpecialOfferProduct} from "./special-offer-product.model";

export class SpecialOffer  {
  /** Primary key for SpecialOffer records. */
  specialOfferID!: number;
  /** Discount description. */
  description!: string;
  /** Discount precentage. */
  discountPct!: number;
  /** Discount type category. */
  type!: string;
  /** Group the discount applies to such as Reseller or Customer. */
  category!: string;
  /** Discount start date. */
  startDate!: Date;
  /** Discount end date. */
  endDate!: Date;
  /** Minimum discount percent allowed. */
  minQty!: number;
  /** Maximum discount percent allowed. */
  maxQty?: number | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  specialOfferProducts?: SpecialOfferProduct[] | undefined;

}

export interface ISpecialOffer {
  /** Primary key for SpecialOffer records. */
  specialOfferID: number;
  /** Discount description. */
  description: string;
  /** Discount precentage. */
  discountPct: number;
  /** Discount type category. */
  type: string;
  /** Group the discount applies to such as Reseller or Customer. */
  category: string;
  /** Discount start date. */
  startDate: Date;
  /** Discount end date. */
  endDate: Date;
  /** Minimum discount percent allowed. */
  minQty: number;
  /** Maximum discount percent allowed. */
  maxQty?: number | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  specialOfferProducts?: SpecialOfferProduct[] | undefined;
}
