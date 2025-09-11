import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import {TransactionHistoryArchiveDto} from "../../../api/transactionHistoryArchiveDto";
import {TransactionHistoryService} from "./transaction-history.service";

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css'],
  providers: [MessageService]
})
export class TransactionHistoryComponent implements OnInit {
  systemInfoList: TransactionHistoryArchiveDto[] = [];
  selectedSystemInfo: TransactionHistoryArchiveDto | null = null;
  loading = true;
  displayDialog = false;

  cols = [
    { field: 'TransactionHistoryArchiveDtoID', header: 'ID' },
    { field: 'databaseVersion', header: 'Database Version' },
    { field: 'versionDate', header: 'Version Date' },
    { field: 'modifiedDate', header: 'Modified Date' }
  ];

  constructor(
    private systemInfoService: TransactionHistoryService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadTransactionHistoryArchiveDto();
  }

  loadTransactionHistoryArchiveDto(): void {
    this.loading = true;
    this.systemInfoService.getTransactionHistoryArchive().subscribe({
      next: (data: any) => {
        this.systemInfoList = data;
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'System information loaded successfully'
        });
      },
      error: (error: any) => {
        console.error('Error loading system information:', error);
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load system information'
        });
      }
    });
  }

  onRowSelect(event: any): void {
    this.selectedSystemInfo = { ...event.data };
    this.displayDialog = true;
  }

  hideDialog(): void {
    this.displayDialog = false;
    this.selectedSystemInfo = null;
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  refresh(): void {
    this.loadTransactionHistoryArchiveDto();
  }
}
