import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactType } from 'src/app/core/models/contact-type.model';


@Injectable({
  providedIn: 'root'
})
export class ContactTypeService {
  private apiUrl = 'http://localhost:9010/api/ContactType';

  constructor(private http: HttpClient) {}//localhost:9010/
  //TODO: Need to fix Not recommnded hence I need to start using Guid to begin with.
  private tempId = 100;
  createContactType(data: ContactType): Observable<ContactType> {
    data.contactTypeID = ++this.tempId; // negative IDs as temp placeholders
    return this.http.post<ContactType>(this.apiUrl, data);
  }
  getContactType(): Observable<ContactType[]> {
    return this.http.get<ContactType[]>(this.apiUrl);
  }

  getContactTypeById(id: number): Observable<ContactType> {
    return this.http.get<ContactType>(`${this.apiUrl}/${id}`);
  }


  updateContactType(id: number, data: ContactType): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  deleteContactType(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
