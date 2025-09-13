
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SystemInformation } from '../../../api/system-information.model';
import {TransactionHistoryArchiveDto} from "../../../api/transactionHistoryArchiveDto";

@Injectable({
  providedIn: 'root'
})
export class TransactionHistoryService {
  private apiUrl = 'http://localhost:9007/api/TransactionHistoryArchive';

  constructor(private http: HttpClient) {}

  createTransactionHistoryArchive(info: TransactionHistoryArchiveDto): Observable<TransactionHistoryArchiveDto> {
    return this.http.post<TransactionHistoryArchiveDto>(this.apiUrl, info);
  }
  getTransactionHistoryArchive(): Observable<TransactionHistoryArchiveDto[]> {
    return this.http.get<TransactionHistoryArchiveDto[]>(this.apiUrl);
  }

  getTransactionHistoryArchiveById(id: number): Observable<TransactionHistoryArchiveDto> {
    return this.http.get<TransactionHistoryArchiveDto>(`${this.apiUrl}/${id}`);
  }

  updateTransactionHistoryArchive(systemInfo: TransactionHistoryArchiveDto): Observable<TransactionHistoryArchiveDto> {
    return this.http.put<TransactionHistoryArchiveDto>(`${this.apiUrl}/${systemInfo.transactionID}`, systemInfo);
  }

  deleteTransactionHistoryArchive(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
