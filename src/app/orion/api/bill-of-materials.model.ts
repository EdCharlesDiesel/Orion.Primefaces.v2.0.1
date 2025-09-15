import {Product} from "./product";
import {UnitMeasure} from "./unit-measure";

export class BillOfMaterials{
  /** Primary key for BillOfMaterials records. */
  billOfMaterialsId!: number;
  /** Parent product identification number. Foreign key to Product.ProductID. */
  productAssemblyId?: number | undefined;
  /** Component identification number. Foreign key to Product.ProductID. */
  componentId!: number;
  /** Date the component started being used in the assembly item. */
  startDate!: Date;
  /** Date the component stopped being used in the assembly item. */
  endDate?: Date | undefined;
  /** Standard code identifying the unit of measure for the quantity. */
  unitMeasureCode!: string;
  /** Indicates the depth the component is from its parent (AssemblyID). */
  bomLevel!: number;
  /** Quantity of the component needed to create the assembly. */
  perAssemblyQty!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  product?: Product;
  product1?: Product;
  unitMeasure?: UnitMeasure;

}

export interface IBillOfMaterials {
  /** Primary key for BillOfMaterials records. */
  billOfMaterialsId: number;
  /** Parent product identification number. Foreign key to Product.ProductID. */
  productAssemblyId?: number | undefined;
  /** Component identification number. Foreign key to Product.ProductID. */
  componentId: number;
  /** Date the component started being used in the assembly item. */
  startDate: Date;
  /** Date the component stopped being used in the assembly item. */
  endDate?: Date | undefined;
  /** Standard code identifying the unit of measure for the quantity. */
  unitMeasureCode: string;
  /** Indicates the depth the component is from its parent (AssemblyID). */
  bomLevel: number;
  /** Quantity of the component needed to create the assembly. */
  perAssemblyQty: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  product?: Product;
  product1?: Product;
  unitMeasure?: UnitMeasure;
}
