export class BusinessEntityContact implements IBusinessEntityContact {
  /** Primary key. Foreign key to BusinessEntity.BusinessEntityID. */
  businessEntityID!: number;
  /** Primary key. Foreign key to Person.BusinessEntityID. */
  personID!: number;
  /** Primary key.  Foreign key to ContactType.ContactTypeID. */
  contactTypeID!: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  businessEntity?: BusinessEntity;
  person?: Person;
  contactType?: ContactType;

  constructor(data?: IBusinessEntityContact) {
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
      this.personID = _data["personID"];
      this.contactTypeID = _data["contactTypeID"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.businessEntity = _data["businessEntity"] ? BusinessEntity.fromJS(_data["businessEntity"]) : undefined as any;
      this.person = _data["person"] ? Person.fromJS(_data["person"]) : undefined as any;
      this.contactType = _data["contactType"] ? ContactType.fromJS(_data["contactType"]) : undefined as any;
    }
  }

  static fromJS(data: any): BusinessEntityContact {
    data = typeof data === 'object' ? data : {};
    let result = new BusinessEntityContact();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["businessEntityID"] = this.businessEntityID;
    data["personID"] = this.personID;
    data["contactTypeID"] = this.contactTypeID;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["businessEntity"] = this.businessEntity ? this.businessEntity.toJSON() : undefined as any;
    data["person"] = this.person ? this.person.toJSON() : undefined as any;
    data["contactType"] = this.contactType ? this.contactType.toJSON() : undefined as any;
    return data;
  }
}

export interface IBusinessEntityContact {
  /** Primary key. Foreign key to BusinessEntity.BusinessEntityID. */
  businessEntityID: number;
  /** Primary key. Foreign key to Person.BusinessEntityID. */
  personID: number;
  /** Primary key.  Foreign key to ContactType.ContactTypeID. */
  contactTypeID: number;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  businessEntity?: BusinessEntity;
  person?: Person;
  contactType?: ContactType;
}
