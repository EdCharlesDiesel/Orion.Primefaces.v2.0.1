import {StateProvince} from "./state-province.model";

export class SalesTaxRate implements ISalesTaxRate {
  /** Primary key for SalesTaxRate records. */
  salesTaxRateID!: number;
  /** State, province, or country/region the sales tax applies to. */
  stateProvinceID!: number;
  /** 1 = Tax applied to retail transactions, 2 = Tax applied to wholesale transactions, 3 = Tax applied to all sales (retail and wholesale) transactions. */
  taxType!: number;
  /** Tax rate amount. */
  taxRate!: number;
  /** Tax rate description. */
  name!: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  stateProvince?: StateProvince;

}

export interface ISalesTaxRate {
  /** Primary key for SalesTaxRate records. */
  salesTaxRateID: number;
  /** State, province, or country/region the sales tax applies to. */
  stateProvinceID: number;
  /** 1 = Tax applied to retail transactions, 2 = Tax applied to wholesale transactions, 3 = Tax applied to all sales (retail and wholesale) transactions. */
  taxType: number;
  /** Tax rate amount. */
  taxRate: number;
  /** Tax rate description. */
  name: string;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  stateProvince?: StateProvince;
}
