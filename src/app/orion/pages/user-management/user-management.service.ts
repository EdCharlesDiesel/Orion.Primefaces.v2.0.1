import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/environment";
import { User } from "../../api/user";
import { Observable } from "rxjs";
import {Person} from "../../api/person.model";

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private baseURL = `${environment.personbaseURL}Persons/`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseURL);
  }

  registerUser(userDetails: Person): Observable<Person> {
    return this.http.post<Person>(this.baseURL, userDetails);
  }


  validateUserName(userName: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseURL}validateUserName/${userName}`);
  }
}
