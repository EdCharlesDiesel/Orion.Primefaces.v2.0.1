import {ProductModelIllustration} from "./product-model-illustration.model";

export class Illustration implements IIllustration {
  /** Primary key for Illustration records. */
  illustrationID!: number;
  /** Illustrations used in manufacturing instructions. Stored as XML. */
  diagram?: string | undefined;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productModelIllustrations?: ProductModelIllustration[] | undefined;

  constructor(data?: IIllustration) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.illustrationID = _data["illustrationID"];
      this.diagram = _data["diagram"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["productModelIllustrations"])) {
        this.productModelIllustrations = [] as any;
        for (let item of _data["productModelIllustrations"])
          this.productModelIllustrations!.push(ProductModelIllustration.fromJS(item));
      }
    }
  }

  static fromJS(data: any): Illustration {
    data = typeof data === 'object' ? data : {};
    let result = new Illustration();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["illustrationID"] = this.illustrationID;
    data["diagram"] = this.diagram;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.productModelIllustrations)) {
      data["productModelIllustrations"] = [];
      for (let item of this.productModelIllustrations)
        data["productModelIllustrations"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface IIllustration {
  /** Primary key for Illustration records. */
  illustrationID: number;
  /** Illustrations used in manufacturing instructions. Stored as XML. */
  diagram?: string | undefined;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  productModelIllustrations?: ProductModelIllustration[] | undefined;
}
