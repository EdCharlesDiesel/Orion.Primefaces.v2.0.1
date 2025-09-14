import {BusinessEntityAddress} from "./business-entity-address.model";
import {BusinessEntityContact} from "./business-entity-contact.model";

export class BusinessEntity implements IBusinessEntity {
  /** Primary key for all customers, vendors, and employees. */
  businessEntityID!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  businessEntityAddress?: BusinessEntityAddress[] | undefined;
  businessEntityContact?: BusinessEntityContact[] | undefined;

  constructor(data?: IBusinessEntity) {
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
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["businessEntityAddress"])) {
        this.businessEntityAddress = [] as any;
        for (let item of _data["businessEntityAddress"])
          this.businessEntityAddress!.push(BusinessEntityAddress.fromJS(item));
      }
      if (Array.isArray(_data["businessEntityContact"])) {
        this.businessEntityContact = [] as any;
        for (let item of _data["businessEntityContact"])
          this.businessEntityContact!.push(BusinessEntityContact.fromJS(item));
      }
    }
  }

  static fromJS(data: any): BusinessEntity {
    data = typeof data === 'object' ? data : {};
    let result = new BusinessEntity();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["businessEntityID"] = this.businessEntityID;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.businessEntityAddress)) {
      data["businessEntityAddress"] = [];
      for (let item of this.businessEntityAddress)
        data["businessEntityAddress"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.businessEntityContact)) {
      data["businessEntityContact"] = [];
      for (let item of this.businessEntityContact)
        data["businessEntityContact"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface IBusinessEntity {
  /** Primary key for all customers, vendors, and employees. */
  businessEntityID: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  businessEntityAddress?: BusinessEntityAddress[] | undefined;
  businessEntityContact?: BusinessEntityContact[] | undefined;
}
