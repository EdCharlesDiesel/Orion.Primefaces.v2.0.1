export class UnitMeasure implements IUnitMeasure {
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

  constructor(data?: IUnitMeasure) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.unitMeasureCode = _data["unitMeasureCode"];
      this.name = _data["name"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["billOfMaterials"])) {
        this.billOfMaterials = [] as any;
        for (let item of _data["billOfMaterials"])
          this.billOfMaterials!.push(BillOfMaterials.fromJS(item));
      }
      if (Array.isArray(_data["products"])) {
        this.products = [] as any;
        for (let item of _data["products"])
          this.products!.push(Product.fromJS(item));
      }
      if (Array.isArray(_data["products1"])) {
        this.products1 = [] as any;
        for (let item of _data["products1"])
          this.products1!.push(Product.fromJS(item));
      }
      if (Array.isArray(_data["productVendors"])) {
        this.productVendors = [] as any;
        for (let item of _data["productVendors"])
          this.productVendors!.push(ProductVendor.fromJS(item));
      }
    }
  }

  static fromJS(data: any): UnitMeasure {
    data = typeof data === 'object' ? data : {};
    let result = new UnitMeasure();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["unitMeasureCode"] = this.unitMeasureCode;
    data["name"] = this.name;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.billOfMaterials)) {
      data["billOfMaterials"] = [];
      for (let item of this.billOfMaterials)
        data["billOfMaterials"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.products)) {
      data["products"] = [];
      for (let item of this.products)
        data["products"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.products1)) {
      data["products1"] = [];
      for (let item of this.products1)
        data["products1"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.productVendors)) {
      data["productVendors"] = [];
      for (let item of this.productVendors)
        data["productVendors"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
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
