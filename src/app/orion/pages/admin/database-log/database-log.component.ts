import { Component, OnInit } from '@angular/core';
import { DatabaseLogService } from './database-log.service'
import { MessageService } from 'primeng/api';
import { DatabaseLog } from '../../../api/database-log';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-database-log',
  templateUrl: './database-log.component.html',
  styleUrls: ['./database-log.component.css'],
  providers: [MessageService]
})
export class DatabaseLogComponent implements OnInit {
  systemInfoList: DatabaseLog[] = [];
  selectedSystemInfo!: DatabaseLog | null;
  displayDialog: boolean = false;
  systemInfoForm!: FormGroup;
  editing: boolean = false;
  loading: boolean = false;
  cols: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: DatabaseLogService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.cols = [
      { field: 'databaseLogID', header: 'ID' },
      { field: 'postTime', header: 'Post Time' },
      { field: 'databaseUser', header: 'Database User' },
      { field: 'event', header: 'Event' },
      { field: 'schema', header: 'Schema' },
      { field: 'object', header: 'Object' },
      { field: 'tsql', header: 'TSQL' },
      { field: 'xmlEvent', header: 'XML Event' }
    ];
    this.loadData();

    this.systemInfoForm = this.fb.group({
      postTime: ['', Validators.required],
      databaseUser: ['', Validators.required],
      event: ['', Validators.required],
      schema: [''],
      object: [''],
      tsql: [''],
      xmlEvent: ['']
    });
  }

  loadData() {
    this.loading = true;
    this.service.getDatabaseLog().subscribe({
      next: data => {
        this.systemInfoList = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  refresh() {
    this.loadData();
  }

  openNew() {
    this.systemInfoForm.reset();
    this.displayDialog = true;
    this.editing = false;
  }

  editSystemInfo(systemInfo: DatabaseLog) {
    this.systemInfoForm.patchValue(systemInfo);
    this.selectedSystemInfo = systemInfo;
    this.displayDialog = true;
    this.editing = true;
  }

  saveSystemInfo() {
    if (this.systemInfoForm.invalid) return;

    const formValue = this.systemInfoForm.value;

    if (this.editing && this.selectedSystemInfo) {
      this.service.updateDatabaseLog(this.selectedSystemInfo.databaseLogID!, formValue).subscribe(() => {

        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Log updated successfully' });
        this.loadData();
        this.hideDialog();
      });
    } else {
      this.service.createDatabaseLog(formValue).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Log added successfully' });
        this.loadData();
        this.hideDialog();
      });
    }
  }

  deleteSystemInfo(systemInfo: DatabaseLog) {
    if (!systemInfo.databaseLogID) return;
    this.service.deleteDatabaseLog(systemInfo.databaseLogID).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Log deleted successfully' });
      this.loadData();
    });
  }

  hideDialog() {
    this.displayDialog = false;
    this.selectedSystemInfo = null;
  }

  onRowSelect(event: any) {
    this.selectedSystemInfo = event.data;
    this.displayDialog = true;
  }


}
