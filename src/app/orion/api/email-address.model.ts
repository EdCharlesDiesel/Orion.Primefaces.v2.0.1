export class EmailAddress implements IEmailAddress {
  /** Primary key. Person associated with this email address.  Foreign key to Person.BusinessEntityID */
  businessEntityID!: number;
  /** Primary key. ID of this email address. */
  emailAddressID!: number;
  /** E-mail address for the person. */
  personalEmailAddress?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  person?: Person;

  constructor(data?: IEmailAddress) {
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
      this.emailAddressID = _data["emailAddressID"];
      this.personalEmailAddress = _data["personalEmailAddress"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.person = _data["person"] ? Person.fromJS(_data["person"]) : undefined as any;
    }
  }

  static fromJS(data: any): EmailAddress {
    data = typeof data === 'object' ? data : {};
    let result = new EmailAddress();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["businessEntityID"] = this.businessEntityID;
    data["emailAddressID"] = this.emailAddressID;
    data["personalEmailAddress"] = this.personalEmailAddress;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["person"] = this.person ? this.person.toJSON() : undefined as any;
    return data;
  }
}

export interface IEmailAddress {
  /** Primary key. Person associated with this email address.  Foreign key to Person.BusinessEntityID */
  businessEntityID: number;
  /** Primary key. ID of this email address. */
  emailAddressID: number;
  /** E-mail address for the person. */
  personalEmailAddress?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  person?: Person;
}
