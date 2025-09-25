import {EmployeeDepartmentHistory} from "./employee-department-history.model ";

export class Shift {
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
