export class SalesTerritoryHistory implements ISalesTerritoryHistory {
  /** Primary key. The sales rep.  Foreign key to SalesPerson.BusinessEntityID. */
  businessEntityID!: number;
  /** Primary key. Territory identification number. Foreign key to SalesTerritory.SalesTerritoryID. */
  territoryID!: number;
  /** Primary key. Date the sales representive started work in the territory. */
  startDate!: Date;
  /** Date the sales representative left work in the territory. */
  endDate?: Date | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  salesPerson?: SalesPerson;
  salesTerritory?: SalesTerritory;

  constructor(data?: ISalesTerritoryHistory) {
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
      this.territoryID = _data["territoryID"];
      this.startDate = _data["startDate"] ? new Date(_data["startDate"].toString()) : undefined as any;
      this.endDate = _data["endDate"] ? new Date(_data["endDate"].toString()) : undefined as any;
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.salesPerson = _data["salesPerson"] ? SalesPerson.fromJS(_data["salesPerson"]) : undefined as any;
      this.salesTerritory = _data["salesTerritory"] ? SalesTerritory.fromJS(_data["salesTerritory"]) : undefined as any;
    }
  }

  static fromJS(data: any): SalesTerritoryHistory {
    data = typeof data === 'object' ? data : {};
    let result = new SalesTerritoryHistory();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["businessEntityID"] = this.businessEntityID;
    data["territoryID"] = this.territoryID;
    data["startDate"] = this.startDate ? this.startDate.toISOString() : undefined as any;
    data["endDate"] = this.endDate ? this.endDate.toISOString() : undefined as any;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["salesPerson"] = this.salesPerson ? this.salesPerson.toJSON() : undefined as any;
    data["salesTerritory"] = this.salesTerritory ? this.salesTerritory.toJSON() : undefined as any;
    return data;
  }
}

export interface ISalesTerritoryHistory {
  /** Primary key. The sales rep.  Foreign key to SalesPerson.BusinessEntityID. */
  businessEntityID: number;
  /** Primary key. Territory identification number. Foreign key to SalesTerritory.SalesTerritoryID. */
  territoryID: number;
  /** Primary key. Date the sales representive started work in the territory. */
  startDate: Date;
  /** Date the sales representative left work in the territory. */
  endDate?: Date | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  salesPerson?: SalesPerson;
  salesTerritory?: SalesTerritory;
}
