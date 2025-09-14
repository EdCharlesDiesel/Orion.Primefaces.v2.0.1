import {ProductModelProductDescriptionCulture} from "./product-model-product-description-culture.model";

export class Culture implements ICulture {
  /** Primary key for Culture records. */
  cultureID!: string;
  /** Culture description. */
  name!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productModelProductDescriptionCultures?: ProductModelProductDescriptionCulture[] | undefined;

  constructor(data?: ICulture) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.cultureID = _data["cultureID"];
      this.name = _data["name"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["productModelProductDescriptionCultures"])) {
        this.productModelProductDescriptionCultures = [] as any;
        for (let item of _data["productModelProductDescriptionCultures"])
          this.productModelProductDescriptionCultures!.push(ProductModelProductDescriptionCulture.fromJS(item));
      }
    }
  }

  static fromJS(data: any): Culture {
    data = typeof data === 'object' ? data : {};
    let result = new Culture();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["cultureID"] = this.cultureID;
    data["name"] = this.name;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.productModelProductDescriptionCultures)) {
      data["productModelProductDescriptionCultures"] = [];
      for (let item of this.productModelProductDescriptionCultures)
        data["productModelProductDescriptionCultures"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface ICulture {
  /** Primary key for Culture records. */
  cultureID: string;
  /** Culture description. */
  name: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  productModelProductDescriptionCultures?: ProductModelProductDescriptionCulture[] | undefined;
}
