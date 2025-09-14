import {Customer} from "./customer";

export class Store implements IStore {
  /** Primary key. Foreign key to Customer.BusinessEntityID. */
  businessEntityID!: number;
  /** Name of the store. */
  name!: string;
  /** ID of the sales person assigned to the customer. Foreign key to SalesPerson.BusinessEntityID. */
  salesPersonID?: number | undefined;
  /** Demographic informationg about the store such as the number of employees, annual sales and store type. */
  demographics?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  businessEntity?: BusinessEntity;
  salesPerson?: SalesPerson;
  customers?: Customer[] | undefined;

  constructor(data?: IStore) {
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
      this.name = _data["name"];
      this.salesPersonID = _data["salesPersonID"];
      this.demographics = _data["demographics"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.businessEntity = _data["businessEntity"] ? BusinessEntity.fromJS(_data["businessEntity"]) : undefined as any;
      this.salesPerson = _data["salesPerson"] ? SalesPerson.fromJS(_data["salesPerson"]) : undefined as any;
      if (Array.isArray(_data["customers"])) {
        this.customers = [] as any;
        for (let item of _data["customers"])
          this.customers!.push(Customer.fromJS(item));
      }
    }
  }

  static fromJS(data: any): Store {
    data = typeof data === 'object' ? data : {};
    let result = new Store();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["businessEntityID"] = this.businessEntityID;
    data["name"] = this.name;
    data["salesPersonID"] = this.salesPersonID;
    data["demographics"] = this.demographics;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["businessEntity"] = this.businessEntity ? this.businessEntity.toJSON() : undefined as any;
    data["salesPerson"] = this.salesPerson ? this.salesPerson.toJSON() : undefined as any;
    if (Array.isArray(this.customers)) {
      data["customers"] = [];
      for (let item of this.customers)
        data["customers"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface IStore {
  /** Primary key. Foreign key to Customer.BusinessEntityID. */
  businessEntityID: number;
  /** Name of the store. */
  name: string;
  /** ID of the sales person assigned to the customer. Foreign key to SalesPerson.BusinessEntityID. */
  salesPersonID?: number | undefined;
  /** Demographic informationg about the store such as the number of employees, annual sales and store type. */
  demographics?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  businessEntity?: BusinessEntity;
  salesPerson?: SalesPerson;
  customers?: Customer[] | undefined;
}
