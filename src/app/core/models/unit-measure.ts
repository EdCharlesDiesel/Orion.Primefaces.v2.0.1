import {ProductVendor} from "./product-vendor.model";
import {BillOfMaterials} from "./bill-of-materials.model";
import {Product} from "./product";

export class UnitMeasure {
  /** Primary key. */
  unitMeasureCode!: string;
  /** Unit of measure description. */
  name!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  billOfMaterials?: BillOfMaterials[] | undefined;
  products?: Product[] | undefined;
  products1?: Product[] | undefined;
  productVendors?: ProductVendor[] | undefined;

}

export interface IUnitMeasure {
  /** Primary key. */
  unitMeasureCode: string;
  /** Unit of measure description. */
  name: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  billOfMaterials?: BillOfMaterials[] | undefined;
  products?: Product[] | undefined;
  products1?: Product[] | undefined;
  productVendors?: ProductVendor[] | undefined;
}
