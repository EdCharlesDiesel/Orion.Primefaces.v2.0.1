export interface ErrorLog {
  errorLogID?: number;         // Primary key, auto-generated
  errorTime: string | Date;    // Required, datetime
  userName: string;            // Required, max length 128
  errorNumber: number;         // Required, int
  errorSeverity?: number;      // Optional, int
  errorState?: number;         // Optional, int
  errorProcedure?: string;     // Optional, max length 126
  errorLine?: number;          // Optional, int
  errorMessage: string;        // Required, max length 4000
}
