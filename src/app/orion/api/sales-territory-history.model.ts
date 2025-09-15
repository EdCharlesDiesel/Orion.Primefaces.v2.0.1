import {SalesTerritory} from "./sales-territory.model";
import {SalesPerson} from "./sales-person.model";

export class SalesTerritoryHistory implements ISalesTerritoryHistory {
  /** Primary key. The sales rep.  Foreign key to SalesPersonModel.BusinessEntityID. */
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

}

export interface ISalesTerritoryHistory {
  /** Primary key. The sales rep.  Foreign key to SalesPersonModel.BusinessEntityID. */
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
