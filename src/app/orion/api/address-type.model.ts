import {BusinessEntityAddress} from "./business-entity-address.model";

export class AddressType implements IAddressType {
  /** Primary key for AddressType records. */
  addressTypeId!: number;
  /** Address type description. For example, Billing, Home, or Shipping. */
  name!: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  businessEntityAddress?: BusinessEntityAddress[] | undefined;

  constructor(data?: IAddressType) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.addressTypeId = _data["addressTypeId"];
      this.name = _data["name"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["businessEntityAddress"])) {
        this.businessEntityAddress = [] as any;
        for (let item of _data["businessEntityAddress"])
          this.businessEntityAddress!.push(BusinessEntityAddress.fromJS(item));
      }
    }
  }

  static fromJS(data: any): AddressType {
    data = typeof data === 'object' ? data : {};
    let result = new AddressType();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["addressTypeId"] = this.addressTypeId;
    data["name"] = this.name;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.businessEntityAddress)) {
      data["businessEntityAddress"] = [];
      for (let item of this.businessEntityAddress)
        data["businessEntityAddress"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface IAddressType {
  /** Primary key for AddressType records. */
  addressTypeId: number;
  /** Address type description. For example, Billing, Home, or Shipping. */
  name: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  businessEntityAddress?: BusinessEntityAddress[] | undefined;
}
