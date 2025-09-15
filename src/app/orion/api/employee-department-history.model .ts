import {Employee} from "./employee.model";
import {Shift} from "./shift.model";
import {Department} from "./department.model";

export interface EmployeeDepartmentHistory {
  businessEntityID: number;   // FK to Employee
  departmentID: number;       // FK to Department
  shiftID: number;            // FK to Shift
  startDate: Date;
  endDate?: Date;             // optional (nullable in DB)
  modifiedDate: Date;

  // Navigation properties
  employee?: Employee;
  department?: Department;
  shift?: Shift;
}
