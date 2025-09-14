import {EmployeeDepartmentHistory} from "./employee-department-history.model ";

export class Shift implements IShift {
  /** Primary key for Shift records. */
  shiftID!: number;
  /** Shift description. */
  name!: string;
  /** Shift start time. */
  startTime!: string;
  /** Shift end time. */
  endTime!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  employeeDepartmentHistories?: EmployeeDepartmentHistory[] | undefined;

  constructor(data?: IShift) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.shiftID = _data["shiftID"];
      this.name = _data["name"];
      this.startTime = _data["startTime"];
      this.endTime = _data["endTime"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      if (Array.isArray(_data["employeeDepartmentHistories"])) {
        this.employeeDepartmentHistories = [] as any;
        for (let item of _data["employeeDepartmentHistories"])
          this.employeeDepartmentHistories!.push(EmployeeDepartmentHistory.fromJS(item));
      }
    }
  }

  static fromJS(data: any): Shift {
    data = typeof data === 'object' ? data : {};
    let result = new Shift();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["shiftID"] = this.shiftID;
    data["name"] = this.name;
    data["startTime"] = this.startTime;
    data["endTime"] = this.endTime;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    if (Array.isArray(this.employeeDepartmentHistories)) {
      data["employeeDepartmentHistories"] = [];
      for (let item of this.employeeDepartmentHistories)
        data["employeeDepartmentHistories"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface IShift {
  /** Primary key for Shift records. */
  shiftID: number;
  /** Shift description. */
  name: string;
  /** Shift start time. */
  startTime: string;
  /** Shift end time. */
  endTime: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  employeeDepartmentHistories?: EmployeeDepartmentHistory[] | undefined;
}
