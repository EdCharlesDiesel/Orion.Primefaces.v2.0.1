export interface Department {
  DepartmentID: number;
  Name: string;
  GroupName: string;
  ModifiedDate: Date;
}

export interface Result<T> {
    data: T | null;
    error?: string;
}


export interface HttpErrorService {
    formatError(err: any): string;
}
