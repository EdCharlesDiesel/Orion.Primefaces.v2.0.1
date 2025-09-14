export class BillOfMaterials implements IBillOfMaterials {
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

  constructor(data?: IBillOfMaterials) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.billOfMaterialsId = _data["billOfMaterialsId"];
      this.productAssemblyId = _data["productAssemblyId"];
      this.componentId = _data["componentId"];
      this.startDate = _data["startDate"] ? new Date(_data["startDate"].toString()) : undefined as any;
      this.endDate = _data["endDate"] ? new Date(_data["endDate"].toString()) : undefined as any;
      this.unitMeasureCode = _data["unitMeasureCode"];
      this.bomLevel = _data["bomLevel"];
      this.perAssemblyQty = _data["perAssemblyQty"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.product = _data["product"] ? Product.fromJS(_data["product"]) : undefined as any;
      this.product1 = _data["product1"] ? Product.fromJS(_data["product1"]) : undefined as any;
      this.unitMeasure = _data["unitMeasure"] ? UnitMeasure.fromJS(_data["unitMeasure"]) : undefined as any;
    }
  }

  static fromJS(data: any): BillOfMaterials {
    data = typeof data === 'object' ? data : {};
    let result = new BillOfMaterials();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["billOfMaterialsId"] = this.billOfMaterialsId;
    data["productAssemblyId"] = this.productAssemblyId;
    data["componentId"] = this.componentId;
    data["startDate"] = this.startDate ? this.startDate.toISOString() : undefined as any;
    data["endDate"] = this.endDate ? this.endDate.toISOString() : undefined as any;
    data["unitMeasureCode"] = this.unitMeasureCode;
    data["bomLevel"] = this.bomLevel;
    data["perAssemblyQty"] = this.perAssemblyQty;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["product"] = this.product ? this.product.toJSON() : undefined as any;
    data["product1"] = this.product1 ? this.product1.toJSON() : undefined as any;
    data["unitMeasure"] = this.unitMeasure ? this.unitMeasure.toJSON() : undefined as any;
    return data;
  }
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
