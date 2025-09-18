import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {distinctUntilChanged, map, shareReplay, tap} from "rxjs/operators";
import {JwtService} from "./jwt.service";
import {Router} from "@angular/router";
import {Person} from "../person.model";

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private currentUserSubject = new BehaviorSubject<Person | null>(null);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  public isAuthenticated = this.currentUser.pipe(map((user) => !!user));
  private baseURL = `${environment.personbaseURL}Persons/`;

  constructor(
    private readonly http: HttpClient,
    private readonly jwtService: JwtService,
    private readonly router: Router,
  ) {}

  public getUsers(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseURL);
  }

  public registerUser(userDetails: Person): Observable<Person> {
    return this.http.post<Person>(this.baseURL, userDetails);
  }

  public validateUserName(userName: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseURL}validateUserName/${userName}`);
  }

  public login(credentials: {
    email: string;
    password: string;
  }): Observable<{ user: Person }> {
    return this.http
      .post<{ user: Person }>("/users/login", { user: credentials })
      .pipe(tap(({ user }) => this.setAuth(user)));
  }

  public register(credentials: {
    username: string;
    email: string;
    password: string;
  }): Observable<{ user: Person }> {
    return this.http
      .post<{ user: Person }>("/users", { user: credentials })
      .pipe(tap(({ user }) => this.setAuth(user)));
  }

  public logout(): void {
    this.purgeAuth();
    void this.router.navigate(["/"]);
  }

  public getCurrentUser(): Observable<{ user: Person }> {
    return this.http.get<{ user: Person }>("/user").pipe(
      tap({
        next: ({ user }) => this.setAuth(user),
        error: () => this.purgeAuth(),
      }),
      shareReplay(1),
    );
  }

  public update(user: Partial<Person>): Observable<{ user: Person }> {
    return this.http.put<{ user: Person }>("/user", { user }).pipe(
      tap(({ user }) => {
        this.currentUserSubject.next(user);
      }),
    );
  }

  public setAuth(user: Person): void {
    this.jwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
  }

  public purgeAuth(): void {
    this.jwtService.destroyToken();
    this.currentUserSubject.next(null);
  }
}
