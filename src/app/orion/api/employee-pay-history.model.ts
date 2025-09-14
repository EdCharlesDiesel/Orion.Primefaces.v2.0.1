import {Employee} from "./employee.model";

export class EmployeePayHistory implements IEmployeePayHistory {
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

  constructor(data?: IEmployeePayHistory) {
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
      this.rateChangeDate = _data["rateChangeDate"] ? new Date(_data["rateChangeDate"].toString()) : undefined as any;
      this.rate = _data["rate"];
      this.payFrequency = _data["payFrequency"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.employee = _data["employee"] ? Employee.fromJS(_data["employee"]) : undefined as any;
    }
  }

  static fromJS(data: any): EmployeePayHistory {
    data = typeof data === 'object' ? data : {};
    let result = new EmployeePayHistory();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["businessEntityID"] = this.businessEntityID;
    data["rateChangeDate"] = this.rateChangeDate ? this.rateChangeDate.toISOString() : undefined as any;
    data["rate"] = this.rate;
    data["payFrequency"] = this.payFrequency;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["employee"] = this.employee ? this.employee.toJSON() : undefined as any;
    return data;
  }
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
