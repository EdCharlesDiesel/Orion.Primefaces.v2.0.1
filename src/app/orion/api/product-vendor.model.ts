import {Product} from "./product";
import {Vendor} from "./vendor";
import {UnitMeasure} from "./unit-measure";

export class ProductVendor implements IProductVendor {
  /** Primary key. Foreign key to Product.ProductID. */
  productID!: number;
  /** Primary key. Foreign key to Vendor.BusinessEntityID. */
  businessEntityID!: number;
  /** The average span of time (in days) between placing an order with the vendor and receiving the purchased product. */
  averageLeadTime!: number;
  /** The vendor's usual selling price. */
  standardPrice!: number;
  /** The selling price when last purchased. */
  lastReceiptCost?: number | undefined;
  /** Date the product was last received by the vendor. */
  lastReceiptDate?: Date | undefined;
  /** The maximum quantity that should be ordered. */
  minOrderQty!: number;
  /** The minimum quantity that should be ordered. */
  maxOrderQty!: number;
  /** The quantity currently on order. */
  onOrderQty?: number | undefined;
  /** The product's unit of measure. */
  unitMeasureCode!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;
  vendor?: Vendor;
  unitMeasure?: UnitMeasure;

}

export interface IProductVendor {
  /** Primary key. Foreign key to Product.ProductID. */
  productID: number;
  /** Primary key. Foreign key to Vendor.BusinessEntityID. */
  businessEntityID: number;
  /** The average span of time (in days) between placing an order with the vendor and receiving the purchased product. */
  averageLeadTime: number;
  /** The vendor's usual selling price. */
  standardPrice: number;
  /** The selling price when last purchased. */
  lastReceiptCost?: number | undefined;
  /** Date the product was last received by the vendor. */
  lastReceiptDate?: Date | undefined;
  /** The maximum quantity that should be ordered. */
  minOrderQty: number;
  /** The minimum quantity that should be ordered. */
  maxOrderQty: number;
  /** The quantity currently on order. */
  onOrderQty?: number | undefined;
  /** The product's unit of measure. */
  unitMeasureCode: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
  vendor?: Vendor;
  unitMeasure?: UnitMeasure;
}
