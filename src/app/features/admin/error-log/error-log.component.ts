import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import {ErrorLogService} from "./error-log.service";
import { ErrorLog } from 'src/app/core/models/errorLog';


@Component({
  selector: 'app-error-log',
  templateUrl: './error-log.component.html',
  styleUrls: ['./error-log.component.scss'],
  providers: [MessageService]
})
export class ErrorLogComponent implements OnInit {
  systemInfoList: ErrorLog[] = [];
  selectedSystemInfo: ErrorLog | null = null;
  loading = true;
  displayDialog = false;

  cols = [
    { field: 'ErrorLogID', header: 'ID' },
    { field: 'errorTime', header: 'Error Time' },
    { field: 'userName', header: 'user Name' },
    { field: 'errorNumber', header: 'Error Number' },
    { field: 'errorSeverity', header: 'Error Severity' },
    { field: 'errorState', header: 'Error State' },
    { field: 'errorProcedure', header: 'Error Procedure' },
    { field: 'errorLine', header: 'Error Line' },
    { field: 'errorMessage', header: 'Error Message' }

  ];

  constructor(
    private systemInfoService: ErrorLogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadErrorLog();
  }

  loadErrorLog(): void {
    this.loading = true;
    this.systemInfoService.getErrorLog().subscribe({
      next: (data: any) => {
        this.systemInfoList = data;
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Error Log loaded successfully'
        });
      },
      error: (error: any) => {
        console.error('Error loading Error Log:', error);
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load Error Log'
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
    this.loadErrorLog();
  }
}
