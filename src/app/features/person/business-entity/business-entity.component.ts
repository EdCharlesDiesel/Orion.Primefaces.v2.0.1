import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {BusinessEntityService} from "./business-entity.service";

import _default from "chart.js/dist/plugins/plugin.tooltip";
import numbers = _default.defaults.animations.numbers;
import { BusinessEntity } from 'src/app/core/models/business-entity.model';

@Component({
  selector: 'app-business-entity',
  templateUrl: './business-entity.component.html',
  styleUrls: ['./business-entity.component.scss'],
  providers: [MessageService]
})
export class BusinessEntityComponent implements OnInit {
  systemInfoList: BusinessEntity[] = [];
  selectedSystemInfo!: BusinessEntity | null;
  displayDialog: boolean = false;
  systemInfoForm!: FormGroup;
  editing: boolean = false;
  loading: boolean = false;
  cols: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: BusinessEntityService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.cols = [
      { field: 'BusinessEntityID', header: 'ID' },
      { field: 'postTime', header: 'Post Time' },
      { field: 'databaseUser', header: 'Database User' },
      { field: 'event', header: 'Event' },
      { field: 'schema', header: 'Schema' },
      { field: 'object', header: 'Object' },
      { field: 'tsql', header: 'TSQL' },
      { field: 'xmlEvent', header: 'XML Event' }
    ];

    this.systemInfoForm = this.fb.group({
      postTime: [new Date().toISOString(), Validators.required],
      databaseUser: ['', Validators.required],
      event: ['', Validators.required],
      schema: [''],
      object: [''],
      tsql: [''],
      xmlEvent: ['']
    });

    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.service.getBusinessEntity().subscribe({
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
    this.systemInfoForm.reset({
      postTime: new Date().toISOString() // reset with current time
    });
    this.displayDialog = true;
    this.editing = false;
    this.selectedSystemInfo = null;
  }

  editSystemInfo(systemInfo: BusinessEntity) {
    this.systemInfoForm.patchValue(systemInfo);
    this.selectedSystemInfo = systemInfo;
    this.displayDialog = true;
    this.editing = true;
  }

  saveSystemInfo() {
    if (this.systemInfoForm.invalid) return;

    const formValue = this.systemInfoForm.value;

    if (this.editing && this.selectedSystemInfo && this.selectedSystemInfo.businessEntityID) {
      // Update existing log
      this.service.updateBusinessEntity(this.selectedSystemInfo.businessEntityID, formValue).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Log updated successfully' });
          this.loadData();
          this.hideDialog();
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update log' });
        }
      });
    } else {
      // Create new log
      this.service.createBusinessEntity(formValue).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Log added successfully' });
          this.loadData();
          this.hideDialog();
        },
        error: (err) => {
          console.error(err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to create log' });
        }
      });
    }
  }

  deleteSystemInfo(businessEntityID: number) {
    if (!businessEntityID) return;
    this.service.deleteBusinessEntity(businessEntityID).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Log deleted successfully' });
        this.loadData();
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete log' });
      }
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
