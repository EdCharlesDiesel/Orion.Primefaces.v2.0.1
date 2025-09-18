export interface TransactionHistoryArchiveDto {
  transactionID: number;       // int (required)
  productID: number;           // int (required)
  referenceOrderID: number;    // int (required)
  referenceOrderLineID: number;// int (required)
  transactionDate: string;     // ISO date string
  transactionType: string;     // char(1): "W", "S", or "P"
  quantity: number;            // int (required)
  actualCost: number;          // decimal (money)
  modifiedDate: string;        // ISO date string
}
