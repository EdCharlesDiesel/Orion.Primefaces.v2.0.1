import {Employee} from "./employee.model";

export class EmployeePayHistory  {
  /** Employee identification number. Foreign key to Employee.BusinessEntityID. */
  businessEntityID!: number;
  /** Date the change in pay is effective */
  rateChangeDate!: Date;
  /** Salary hourly rate. */
  rate!: number;
  /** 1 = Salary received monthly, 2 = Salary received biweekly */
  payFrequency!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  employee?: Employee;

}

export interface IEmployeePayHistory {
  /** Employee identification number. Foreign key to Employee.BusinessEntityID. */
  businessEntityID: number;
  /** Date the change in pay is effective */
  rateChangeDate: Date;
  /** Salary hourly rate. */
  rate: number;
  /** 1 = Salary received monthly, 2 = Salary received biweekly */
  payFrequency: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  employee?: Employee;
}
