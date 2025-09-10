import { Component, OnInit } from '@angular/core';
import { DatabaseLogService } from './database-log.service'
import { MessageService } from 'primeng/api';
import { DatabaseLog } from '../../../api/database-log';

@Component({
  selector: 'app-database-log',
  templateUrl: './database-log.component.html',
  styleUrls: ['./database-log.component.css'],
  providers: [MessageService]
})
export class DatabaseLogComponent implements OnInit {
  systemInfoList: DatabaseLog[] = [];
  selectedSystemInfo: DatabaseLog | null = null;
  loading = true;
  displayDialog = false;

  cols = [
    { field: 'databaseLogID', header: 'ID' },
    { field: 'postTime', header: 'Post Time' },
    { field: 'databaseUser', header: 'Database User' },
    { field: 'event', header: 'Event' },
    { field: 'schema', header: 'Schema' },
    { field: 'object', header: 'Object' },
    { field: 'tsql', header: 'Tsql' },
    { field: 'xmlEvent', header: 'XmlEvent' }
  ];

  constructor(
    private databaseLog: DatabaseLogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadDatabaseLog();
  }

  public loadDatabaseLog(): void {
    this.loading = true;
    this.databaseLog.getDatabaseLog().subscribe({
      next: (data: any) => {
        this.systemInfoList = data;
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Database log loaded successfully'
        });
      },
      error: (error: any) => {
        console.error('Error loading Database log:', error);
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load Database log'
        });
      }
    });
  }

  public onRowSelect(event: any): void {
    this.selectedSystemInfo = { ...event.data };
    this.displayDialog = true;
  }

  public hideDialog(): void {
    this.displayDialog = false;
    this.selectedSystemInfo = null;
  }

  public formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  public refresh(): void {
    this.loadDatabaseLog();
  }
}
