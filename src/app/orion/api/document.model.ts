import {Employee} from "./employee.model";
import {ProductDocument} from "./product-document.model";

export class Document implements IDocument {
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

  constructor(data?: IDocument) {
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
      this.documentLevel = _data["documentLevel"];
      this.title = _data["title"];
      this.owner = _data["owner"];
      this.folderFlag = _data["folderFlag"];
      this.fileName = _data["fileName"];
      this.fileExtension = _data["fileExtension"];
      this.revision = _data["revision"];
      this.changeNumber = _data["changeNumber"];
      this.status = _data["status"];
      this.documentSummary = _data["documentSummary"];
      this.completeDocument = _data["completeDocument"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.employee = _data["employee"] ? Employee.fromJS(_data["employee"]) : undefined as any;
      if (Array.isArray(_data["productDocuments"])) {
        this.productDocuments = [] as any;
        for (let item of _data["productDocuments"])
          this.productDocuments!.push(ProductDocument.fromJS(item));
      }
    }
  }

  static fromJS(data: any): Document {
    data = typeof data === 'object' ? data : {};
    let result = new Document();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["businessEntityID"] = this.businessEntityID;
    data["documentLevel"] = this.documentLevel;
    data["title"] = this.title;
    data["owner"] = this.owner;
    data["folderFlag"] = this.folderFlag;
    data["fileName"] = this.fileName;
    data["fileExtension"] = this.fileExtension;
    data["revision"] = this.revision;
    data["changeNumber"] = this.changeNumber;
    data["status"] = this.status;
    data["documentSummary"] = this.documentSummary;
    data["completeDocument"] = this.completeDocument;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["employee"] = this.employee ? this.employee.toJSON() : undefined as any;
    if (Array.isArray(this.productDocuments)) {
      data["productDocuments"] = [];
      for (let item of this.productDocuments)
        data["productDocuments"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
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
