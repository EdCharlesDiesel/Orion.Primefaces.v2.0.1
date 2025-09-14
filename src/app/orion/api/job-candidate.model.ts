import {Employee} from "./employee.model";

export class JobCandidate implements IJobCandidate {
  /** Primary key for JobCandidate records. */
  jobCandidateID!: number;
  /** Employee identification number if applicant was hired. Foreign key to Employee.BusinessEntityID. */
  businessEntityID?: number | undefined;
  /** Résumé in XML format. */
  resume?: string | undefined;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  employee?: Employee;

  constructor(data?: IJobCandidate) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.jobCandidateID = _data["jobCandidateID"];
      this.businessEntityID = _data["businessEntityID"];
      this.resume = _data["resume"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.employee = _data["employee"] ? Employee.fromJS(_data["employee"]) : undefined as any;
    }
  }

  static fromJS(data: any): JobCandidate {
    data = typeof data === 'object' ? data : {};
    let result = new JobCandidate();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["jobCandidateID"] = this.jobCandidateID;
    data["businessEntityID"] = this.businessEntityID;
    data["resume"] = this.resume;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["employee"] = this.employee ? this.employee.toJSON() : undefined as any;
    return data;
  }
}

export interface IJobCandidate {
  /** Primary key for JobCandidate records. */
  jobCandidateID: number;
  /** Employee identification number if applicant was hired. Foreign key to Employee.BusinessEntityID. */
  businessEntityID?: number | undefined;
  /** Résumé in XML format. */
  resume?: string | undefined;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  employee?: Employee;
}
