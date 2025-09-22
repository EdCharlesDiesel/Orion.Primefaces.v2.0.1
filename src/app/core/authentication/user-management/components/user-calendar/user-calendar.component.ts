// user-calendar.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {StringMeetingModel} from "../../../../models/string-meeting.model";
import {CalendarMatchingService} from "./calendar-matching.service";



@Component({
  selector: 'app-user-calendar',
  templateUrl: './user-user-calendar.component.html'
})
export class UserCalendarComponent {
  form: FormGroup;
  results: StringMeetingModel[] = [];
  loading = false;

  constructor(private fb: FormBuilder, private service: CalendarMatchingService) {
    this.form = this.fb.group({
      calendar1: this.fb.array([]),
      dailyBounds1: this.fb.group({
        start: ['', Validators.required],
        end: ['', Validators.required]
      }),
      calendar2: this.fb.array([]),
      dailyBounds2: this.fb.group({
        start: ['', Validators.required],
        end: ['', Validators.required]
      }),
      meetingDuration: [30, Validators.required]
    });

    // init with one meeting each
    this.addMeeting('calendar1');
    this.addMeeting('calendar2');
  }

  get calendar1() { return this.form.get('calendar1') as FormArray; }
  get calendar2() { return this.form.get('calendar2') as FormArray; }

  addMeeting(controlName: 'calendar1' | 'calendar2') {
    (this.form.get(controlName) as FormArray).push(
      this.fb.group({
        start: ['', Validators.required],
        end: ['', Validators.required]
      })
    );
  }

  removeMeeting(controlName: 'calendar1' | 'calendar2', index: number) {
    (this.form.get(controlName) as FormArray).removeAt(index);
  }

  submit() {
    if (this.form.invalid) return;

    this.loading = true;
    const { calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration } = this.form.value;

    this.service.getMatchingSlots(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration)
      .subscribe({
        next: res => {
          this.results = res;
          this.loading = false;
        },
        error: () => this.loading = false
      });
  }
}
