import {SalesTerritory} from "./sales-territory.model";
import {SalesOrderHeader} from "./sale-order-header.model";
import {Store} from "./store";

export class Customer implements ICustomer {
  /** Primary key. */
  customerID!: number;
  /** Foreign key to Person.BusinessEntityID */
  personID?: number | undefined;
  /** Foreign key to Store.BusinessEntityID */
  storeID?: number | undefined;
  /** ID of the territory in which the customer is located. Foreign key to SalesTerritory.SalesTerritoryID. */
  territoryID?: number | undefined;
  /** Unique number identifying the customer assigned by the accounting system. */
  accountNumber!: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  person?: Person;
  store?: Store;
  salesTerritory?: SalesTerritory;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;

  constructor(data?: ICustomer) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.customerID = _data["customerID"];
      this.personID = _data["personID"];
      this.storeID = _data["storeID"];
      this.territoryID = _data["territoryID"];
      this.accountNumber = _data["accountNumber"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.person = _data["person"] ? Person.fromJS(_data["person"]) : undefined as any;
      this.store = _data["store"] ? Store.fromJS(_data["store"]) : undefined as any;
      this.salesTerritory = _data["salesTerritory"] ? SalesTerritory.fromJS(_data["salesTerritory"]) : undefined as any;
      if (Array.isArray(_data["salesOrderHeaders"])) {
        this.salesOrderHeaders = [] as any;
        for (let item of _data["salesOrderHeaders"])
          this.salesOrderHeaders!.push(SalesOrderHeader.fromJS(item));
      }
    }
  }

  static fromJS(data: any): Customer {
    data = typeof data === 'object' ? data : {};
    let result = new Customer();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["customerID"] = this.customerID;
    data["personID"] = this.personID;
    data["storeID"] = this.storeID;
    data["territoryID"] = this.territoryID;
    data["accountNumber"] = this.accountNumber;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["person"] = this.person ? this.person.toJSON() : undefined as any;
    data["store"] = this.store ? this.store.toJSON() : undefined as any;
    data["salesTerritory"] = this.salesTerritory ? this.salesTerritory.toJSON() : undefined as any;
    if (Array.isArray(this.salesOrderHeaders)) {
      data["salesOrderHeaders"] = [];
      for (let item of this.salesOrderHeaders)
        data["salesOrderHeaders"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface ICustomer {
  /** Primary key. */
  customerID: number;
  /** Foreign key to Person.BusinessEntityID */
  personID?: number | undefined;
  /** Foreign key to Store.BusinessEntityID */
  storeID?: number | undefined;
  /** ID of the territory in which the customer is located. Foreign key to SalesTerritory.SalesTerritoryID. */
  territoryID?: number | undefined;
  /** Unique number identifying the customer assigned by the accounting system. */
  accountNumber: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  person?: Person;
  store?: Store;
  salesTerritory?: SalesTerritory;
  salesOrderHeaders?: SalesOrderHeader[] | undefined;
}
