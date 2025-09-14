import {SqlHierarchyId} from "./SqlHierarchyId";
import {EmployeeDepartmentHistory} from "./employee-department-history.model ";
import {PurchaseOrderHeader} from "./purchase-order-header.model";
import {Course} from "./course.model";
import {SalesPerson} from "./sales-person.model";

export class Employee implements IEmployee {
  /** Primary key for Employee records.  Foreign key to BusinessEntity.BusinessEntityID. */
  businessEntityID!: number;
  /** Unique national identification number such as a social security number. */
  nationalIDNumber!: string;
  /** Network login. */
  loginID!: string;
  organizationNode?: SqlHierarchyId;
  /** The depth of the employee in the corporate hierarchy. */
  organizationLevel?: number | undefined;  /** Work title such as Buyer or Sales Representative. */
  jobTitle!: string;
  /** Date of birth. */
  birthDate!: Date;
  /** M = Married, S = Single */
  maritalStatus!: string;
  /** M = Male, F = Female */
  gender!: string;
  /** Employee hired on this date. */
  hireDate!: Date;
  /** Job classification. 0 = Hourly, not exempt from collective bargaining. 1 = Salaried, exempt from collective bargaining. */
  salariedFlag!: boolean;
  /** Number of available vacation hours. */
  vacationHours!: number;
  /** Number of available sick leave hours. */
  sickLeaveHours!: number;
  /** 0 = Inactive, 1 = Active */
  currentFlag!: boolean;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  person?: Person;
  employeeDepartmentHistories?: EmployeeDepartmentHistory[] | undefined;
  employeePayHistories?: EmployeePayHistory[] | undefined;
  jobCandidates?: JobCandidate[] | undefined;
  documents?: Document[] | undefined;
  purchaseOrderHeaders?: PurchaseOrderHeader[] | undefined;
  salesPerson?: SalesPerson;
  jobLevel?: number;
  yearsInService?: number;
  attendedCourses?: Course[] | undefined;
  suggestedBonus?: number;
  salary?: number;
  minimumRaiseGiven?: boolean;
  id?: string;
  entityVersion?: number;

  constructor(data?: IEmployee) {
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
      this.nationalIDNumber = _data["nationalIDNumber"];
      this.loginID = _data["loginID"];
      this.organizationNode = _data["organizationNode"] ? SqlHierarchyId.fromJS(_data["organizationNode"]) : undefined as any;
      this.organizationLevel = _data["organizationLevel"];
      this.jobTitle = _data["jobTitle"];
      this.birthDate = _data["birthDate"] ? new Date(_data["birthDate"].toString()) : undefined as any;
      this.maritalStatus = _data["maritalStatus"];
      this.gender = _data["gender"];
      this.hireDate = _data["hireDate"] ? new Date(_data["hireDate"].toString()) : undefined as any;
      this.salariedFlag = _data["salariedFlag"];
      this.vacationHours = _data["vacationHours"];
      this.sickLeaveHours = _data["sickLeaveHours"];
      this.currentFlag = _data["currentFlag"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.person = _data["person"] ? Person.fromJS(_data["person"]) : undefined as any;
      if (Array.isArray(_data["employeeDepartmentHistories"])) {
        this.employeeDepartmentHistories = [] as any;
        for (let item of _data["employeeDepartmentHistories"])
          this.employeeDepartmentHistories!.push(EmployeeDepartmentHistory.fromJS(item));
      }
      if (Array.isArray(_data["employeePayHistories"])) {
        this.employeePayHistories = [] as any;
        for (let item of _data["employeePayHistories"])
          this.employeePayHistories!.push(EmployeePayHistory.fromJS(item));
      }
      if (Array.isArray(_data["jobCandidates"])) {
        this.jobCandidates = [] as any;
        for (let item of _data["jobCandidates"])
          this.jobCandidates!.push(JobCandidate.fromJS(item));
      }
      if (Array.isArray(_data["documents"])) {
        this.documents = [] as any;
        for (let item of _data["documents"])
          this.documents!.push(Document.fromJS(item));
      }
      if (Array.isArray(_data["purchaseOrderHeaders"])) {
        this.purchaseOrderHeaders = [] as any;
        for (let item of _data["purchaseOrderHeaders"])
          this.purchaseOrderHeaders!.push(PurchaseOrderHeader.fromJS(item));
      }
      this.salesPerson = _data["salesPerson"] ? SalesPerson.fromJS(_data["salesPerson"]) : undefined as any;
      this.jobLevel = _data["jobLevel"];
      this.yearsInService = _data["yearsInService"];
      if (Array.isArray(_data["attendedCourses"])) {
        this.attendedCourses = [] as any;
        for (let item of _data["attendedCourses"])
          this.attendedCourses!.push(Course.fromJS(item));
      }
      this.suggestedBonus = _data["suggestedBonus"];
      this.salary = _data["salary"];
      this.minimumRaiseGiven = _data["minimumRaiseGiven"];
      this.id = _data["id"];
      this.entityVersion = _data["entityVersion"];
    }
  }

  static fromJS(data: any): Employee {
    data = typeof data === 'object' ? data : {};
    let result = new Employee();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["businessEntityID"] = this.businessEntityID;
    data["nationalIDNumber"] = this.nationalIDNumber;
    data["loginID"] = this.loginID;
    data["organizationNode"] = this.organizationNode ? this.organizationNode.toJSON() : undefined as any;
    data["organizationLevel"] = this.organizationLevel;
    data["jobTitle"] = this.jobTitle;
    data["birthDate"] = this.birthDate ? this.birthDate.toISOString() : undefined as any;
    data["maritalStatus"] = this.maritalStatus;
    data["gender"] = this.gender;
    data["hireDate"] = this.hireDate ? this.hireDate.toISOString() : undefined as any;
    data["salariedFlag"] = this.salariedFlag;
    data["vacationHours"] = this.vacationHours;
    data["sickLeaveHours"] = this.sickLeaveHours;
    data["currentFlag"] = this.currentFlag;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["person"] = this.person ? this.person.toJSON() : undefined as any;
    if (Array.isArray(this.employeeDepartmentHistories)) {
      data["employeeDepartmentHistories"] = [];
      for (let item of this.employeeDepartmentHistories)
        data["employeeDepartmentHistories"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.employeePayHistories)) {
      data["employeePayHistories"] = [];
      for (let item of this.employeePayHistories)
        data["employeePayHistories"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.jobCandidates)) {
      data["jobCandidates"] = [];
      for (let item of this.jobCandidates)
        data["jobCandidates"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.documents)) {
      data["documents"] = [];
      for (let item of this.documents)
        data["documents"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.purchaseOrderHeaders)) {
      data["purchaseOrderHeaders"] = [];
      for (let item of this.purchaseOrderHeaders)
        data["purchaseOrderHeaders"].push(item ? item.toJSON() : undefined as any);
    }
    data["salesPerson"] = this.salesPerson ? this.salesPerson.toJSON() : undefined as any;
    data["jobLevel"] = this.jobLevel;
    data["yearsInService"] = this.yearsInService;
    if (Array.isArray(this.attendedCourses)) {
      data["attendedCourses"] = [];
      for (let item of this.attendedCourses)
        data["attendedCourses"].push(item ? item.toJSON() : undefined as any);
    }
    data["suggestedBonus"] = this.suggestedBonus;
    data["salary"] = this.salary;
    data["minimumRaiseGiven"] = this.minimumRaiseGiven;
    data["id"] = this.id;
    data["entityVersion"] = this.entityVersion;
    return data;
  }
}

export interface IEmployee {
  /** Primary key for Employee records.  Foreign key to BusinessEntity.BusinessEntityID. */
  businessEntityID: number;
  /** Unique national identification number such as a social security number. */
  nationalIDNumber: string;
  /** Network login. */
  loginID: string;
  organizationNode?: SqlHierarchyId;
  /** The depth of the employee in the corporate hierarchy. */
  organizationLevel?: number | undefined;
  /** Work title such as Buyer or Sales Representative. */
  jobTitle: string;
  /** Date of birth. */
  birthDate: Date;
  /** M = Married, S = Single */
  maritalStatus: string;
  /** M = Male, F = Female */
  gender: string;
  /** Employee hired on this date. */
  hireDate: Date;
  /** Job classification. 0 = Hourly, not exempt from collective bargaining. 1 = Salaried, exempt from collective bargaining. */
  salariedFlag: boolean;
  /** Number of available vacation hours. */
  vacationHours: number;
  /** Number of available sick leave hours. */
  sickLeaveHours: number;
  /** 0 = Inactive, 1 = Active */
  currentFlag: boolean;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  person?: Person;
  employeeDepartmentHistories?: EmployeeDepartmentHistory[] | undefined;
  employeePayHistories?: EmployeePayHistory[] | undefined;
  jobCandidates?: JobCandidate[] | undefined;
  documents?: Document[] | undefined;
  purchaseOrderHeaders?: PurchaseOrderHeader[] | undefined;
  salesPerson?: SalesPerson;
  jobLevel?: number;
  yearsInService?: number;
  attendedCourses?: Course[] | undefined;
  suggestedBonus?: number;
  salary?: number;
  minimumRaiseGiven?: boolean;
  id?: string;
  entityVersion?: number;
}
