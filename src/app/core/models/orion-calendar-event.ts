export class OrionCalendarEvent {
  firstName?: string | undefined;
  lastName?: string | undefined;
  employeeNumber?: string | undefined;
  company?: string | undefined;
  salary?: any | undefined;
  suggestedBonus?: any | undefined;
  yearsInService?: any | undefined;
  id?: string;

}

export interface IOrionCalendarEventDto {
  firstName?: string | undefined;
  lastName?: string | undefined;
  employeeNumber?: string | undefined;
  company?: string | undefined;
  salary?: any | undefined;
  suggestedBonus?: any | undefined;
  yearsInService?: any | undefined;
  id?: string;
}
