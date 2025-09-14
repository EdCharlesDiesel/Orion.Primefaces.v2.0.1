import { Person } from "./person.model";
import { EmployeeDepartmentHistory } from "./employee-department-history.model";
import { EmployeePayHistory } from "./employee-pay-history.model";
import { JobCandidate } from "./job-candidate.model";
import { Document } from "./document.model";
import { PurchaseOrderHeader } from "./purchase-order-header.model";
import { SalesPerson } from "./sales-person.model";

// If you use Microsoft SQL HierarchyId, represent it as string for now
export interface Employee {
  businessEntityID: number;
  nationalIDNumber: string;
  loginID: string;
  organizationNode?: string;   // SqlHierarchyId → stored as string in TS
  organizationLevel?: number;

  jobTitle: string;
  birthDate: Date;
  maritalStatus: string;   // could be enum: "M" | "S"
  gender: string;          // could be enum: "M" | "F"
  hireDate: Date;
  salariedFlag: boolean;
  vacationHours: number;
  sickLeaveHours: number;
  currentFlag: boolean;
  rowguid: string;
  modifiedDate: Date;

  // Navigation properties
  person?: Person;
  employeeDepartmentHistories?: EmployeeDepartmentHistory[];
  employeePayHistories?: EmployeePayHistory[];
  jobCandidates?: JobCandidate[];
  documents?: Document[];
  purchaseOrderHeaders?: PurchaseOrderHeader[];
  salesPerson?: SalesPerson;

  // Custom business props
  jobLevel?: number;
  yearsInService?: number;
  attendedCourses?: string[];  // assuming list of course IDs/names
  suggestedBonus?: number;
  salary?: number;
  minimumRaiseGiven?: number;

  // Entity metadata
  id?: number;
  entityVersion?: number;
}
