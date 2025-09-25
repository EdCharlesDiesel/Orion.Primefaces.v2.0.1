import {Employee} from "./employee.model";

export class JobCandidate {
  /** Primary key for JobCandidate records. */
  jobCandidateID!: number;
  /** Employee identification number if applicant was hired. Foreign key to Employee.BusinessEntityID. */
  businessEntityID?: number | undefined;
  /** Résumé in XML format. */
  resume?: string | undefined;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  employee?: Employee;

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
