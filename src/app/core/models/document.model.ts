import {Employee} from "./employee.model";
import {ProductDocument} from "./product-document.model";

export class Document {
  /** Primary key for Document records.  Foreign key to BusinessEntity.BusinessEntityID. */
  businessEntityID!: number;
  /** Depth in the document hierarchy. */
  documentLevel?: number | undefined;
  /** Title of the document. */
  title!: string;
  /** Employee who controls the document.  Foreign key to Employee.BusinessEntityID */
  owner!: number;
  /** 0 = This is a folder, 1 = This is a document. */
  folderFlag!: boolean;
  /** File name of the document */
  fileName!: string;
  /** File extension indicating the document type. For example, .doc or .txt. */
  fileExtension!: string;
  /** Revision number of the document.  */
  revision!: string;
  /** Engineering change approval number. */
  changeNumber!: number;
  /** 1 = Pending approval, 2 = Approved, 3 = Obsolete */
  status!: number;
  /** Document abstract. */
  documentSummary?: string | undefined;
  /** Complete document. */
  completeDocument?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Required for FileStream. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  employee?: Employee;
  productDocuments?: ProductDocument[] | undefined;

}

export interface IDocument {
  /** Primary key for Document records.  Foreign key to BusinessEntity.BusinessEntityID. */
  businessEntityID: number;
  /** Depth in the document hierarchy. */
  documentLevel?: number | undefined;
  /** Title of the document. */
  title: string;
  /** Employee who controls the document.  Foreign key to Employee.BusinessEntityID */
  owner: number;
  /** 0 = This is a folder, 1 = This is a document. */
  folderFlag: boolean;
  /** File name of the document */
  fileName: string;
  /** File extension indicating the document type. For example, .doc or .txt. */
  fileExtension: string;
  /** Revision number of the document.  */
  revision: string;
  /** Engineering change approval number. */
  changeNumber: number;
  /** 1 = Pending approval, 2 = Approved, 3 = Obsolete */
  status: number;
  /** Document abstract. */
  documentSummary?: string | undefined;
  /** Complete document. */
  completeDocument?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Required for FileStream. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  employee?: Employee;
  productDocuments?: ProductDocument[] | undefined;
}
