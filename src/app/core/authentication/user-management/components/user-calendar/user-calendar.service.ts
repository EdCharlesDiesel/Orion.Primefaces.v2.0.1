
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StringMeetingModel} from "../../../../models/string-meeting.model";


@Injectable({providedIn: 'root'})
export class UserCalendarService {
  private apiUrl = 'https://localhost:5001/api/calendar-matching';

  constructor(private http: HttpClient) {
  }

  getMatchingSlots(
    calendarOne: StringMeetingModel[],
    dailyBoundsOne: StringMeetingModel,
    calendarTwo: StringMeetingModel[],
    dailyBoundsTwo: StringMeetingModel,
    meetingDuration: number
  ): Observable<StringMeetingModel[]> {
    return this.http.post<StringMeetingModel[]>(this.apiUrl, {
      calendarOne,
      dailyBoundsOne,
      calendarTwo,
      dailyBoundsTwo,
      meetingDuration
    });
  }
}
