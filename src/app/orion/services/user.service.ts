import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { User } from "../../orion/api/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = `${environment.baseURL}/user/`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL);
  }

  registerUser(userDetails: User): Observable<User> {
    return this.http.post<User>(this.baseURL, userDetails);
  }

  

  validateUserName(userName: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseURL}validateUserName/${userName}`);
  }
}
