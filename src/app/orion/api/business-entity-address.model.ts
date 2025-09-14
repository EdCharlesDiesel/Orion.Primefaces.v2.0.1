export class BusinessEntityAddress implements IBusinessEntityAddress {
  /** Primary key. Foreign key to BusinessEntity.BusinessEntityID. */
  businessEntityID!: number;
  /** Primary key. Foreign key to Address.AddressID. */
  addressID!: number;
  /** Primary key. Foreign key to AddressType.AddressTypeID. */
  addressTypeID!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  businessEntity?: BusinessEntity;
  address?: Address;
  addressType?: AddressType;

  constructor(data?: IBusinessEntityAddress) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.businessEntityID = _data["businessEntityID"];
      this.addressID = _data["addressID"];
      this.addressTypeID = _data["addressTypeID"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.businessEntity = _data["businessEntity"] ? BusinessEntity.fromJS(_data["businessEntity"]) : undefined as any;
      this.address = _data["address"] ? Address.fromJS(_data["address"]) : undefined as any;
      this.addressType = _data["addressType"] ? AddressType.fromJS(_data["addressType"]) : undefined as any;
    }
  }

  static fromJS(data: any): BusinessEntityAddress {
    data = typeof data === 'object' ? data : {};
    let result = new BusinessEntityAddress();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["businessEntityID"] = this.businessEntityID;
    data["addressID"] = this.addressID;
    data["addressTypeID"] = this.addressTypeID;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["businessEntity"] = this.businessEntity ? this.businessEntity.toJSON() : undefined as any;
    data["address"] = this.address ? this.address.toJSON() : undefined as any;
    data["addressType"] = this.addressType ? this.addressType.toJSON() : undefined as any;
    return data;
  }
}

export interface IBusinessEntityAddress {
  /** Primary key. Foreign key to BusinessEntity.BusinessEntityID. */
  businessEntityID: number;
  /** Primary key. Foreign key to Address.AddressID. */
  addressID: number;
  /** Primary key. Foreign key to AddressType.AddressTypeID. */
  addressTypeID: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  businessEntity?: BusinessEntity;
  address?: Address;
  addressType?: AddressType;
}
