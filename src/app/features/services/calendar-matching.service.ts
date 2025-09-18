// services/calendar-matching.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StringMeetingModel} from "../api/string-meeting.model";


@Injectable({ providedIn: 'root' })
export class CalendarMatchingService {
  private apiUrl = 'https://localhost:5001/api/calendar-matching';

  constructor(private http: HttpClient) {}

  getMatchingSlots(
    calendar1: StringMeetingModel[],
    dailyBounds1: StringMeetingModel,
    calendar2: StringMeetingModel[],
    dailyBounds2: StringMeetingModel,
    meetingDuration: number
  ): Observable<StringMeetingModel[]> {
    return this.http.post<StringMeetingModel[]>(this.apiUrl, {
      calendar1,
      dailyBounds1,
      calendar2,
      dailyBounds2,
      meetingDuration
    });
  }
}
