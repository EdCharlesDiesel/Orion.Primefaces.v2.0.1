import {BusinessEntityContact} from "./business-entity-contact.model";

export class ContactType implements IContactType {
  /** Primary key for ContactType records. */
  contactTypeID!: number;
  /** Contact type description. */
  name!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  businessEntityContact?: BusinessEntityContact[] | undefined;

  constructor(data?: IContactType) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.contactTypeID = _data["contactTypeID"];
      this.name = _data["name"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["businessEntityContact"])) {
        this.businessEntityContact = [] as any;
        for (let item of _data["businessEntityContact"])
          this.businessEntityContact!.push(BusinessEntityContact.fromJS(item));
      }
    }
  }

  static fromJS(data: any): ContactType {
    data = typeof data === 'object' ? data : {};
    let result = new ContactType();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["contactTypeID"] = this.contactTypeID;
    data["name"] = this.name;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.businessEntityContact)) {
      data["businessEntityContact"] = [];
      for (let item of this.businessEntityContact)
        data["businessEntityContact"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface IContactType {
  /** Primary key for ContactType records. */
  contactTypeID: number;
  /** Contact type description. */
  name: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  businessEntityContact?: BusinessEntityContact[] | undefined;
}
