import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryRegion } from 'src/app/core/models/country-region.model';



@Injectable({
  providedIn: 'root'
})
export class CountryRegionsService {
  private apiUrl = 'http://localhost:9010/api/CountryRegion';

  constructor(private http: HttpClient) {}//localhost:9010/
  //TODO: Need to fix Not recommnded hence I need to start using Guid to begin with.
  private tempId = 100;
  createCountryRegion(data: CountryRegion): Observable<CountryRegion> {
    data. = ++this.tempId; // negative IDs as temp placeholders
    return this.http.post<CountryRegion>(this.apiUrl, data);
  }
  getCountryRegion(): Observable<CountryRegion[]> {
    return this.http.get<CountryRegion[]>(this.apiUrl);
  }

  getCountryRegionById(id: number): Observable<CountryRegion> {
    return this.http.get<CountryRegion>(`${this.apiUrl}/${id}`);
  }


  updateCountryRegion(id: number, data: CountryRegion): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  public deleteCountryRegion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
