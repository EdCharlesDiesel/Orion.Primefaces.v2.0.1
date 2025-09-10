export interface DatabaseLog {
  databaseLogID: number;
  postTime: string;       // ISO date string
  databaseUser: string;
  event: string;
  schema: string;
  object: string;
  tsql: string;
  xmlEvent: string;
}
