import {Component, OnInit} from '@angular/core';
import {Department} from "../../../../../api/department.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DepartmentsService} from "./departments.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
  providers: [MessageService]   // <-- Add this
})
export class DepartmentsComponent implements OnInit {
  systemInfoList: Department[] = [];
  selectedSystemInfo!: Department | null;
  displayDialog: boolean = false;
  systemInfoForm!: FormGroup;
  editing: boolean = false;
  loading: boolean = false;
  cols: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: DepartmentsService,
    private messageService: MessageService
) {}

  ngOnInit() {
    this.cols = [
      { field: 'departmentID', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'groupName', header: 'Group Name' },
      { field: 'ModifiedDate', header: 'Modified Date' }
    ];

    this.systemInfoForm = this.fb.group({
      Name: ['', Validators.required],
      GroupName: ['', Validators.required],
      ModifiedDate:  [new Date().toISOString(), Validators.required],
    });

    this.loadData();
  }

public loadData() {
    this.loading = true;
    this.service.getDepartments().subscribe({
      next: data => {
        this.systemInfoList = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

 public refresh() {
    this.loadData();
  }

public openNew() {
    this.systemInfoForm.reset({
      postTime: new Date().toISOString() // reset with current time
    });
    this.displayDialog = true;
    this.editing = false;
    this.selectedSystemInfo = null;
  }


public editSystemInfo(systemInfo: Department) {
    this.systemInfoForm.patchValue(systemInfo);
    this.selectedSystemInfo = systemInfo;
    this.displayDialog = true;
    this.editing = true;
  }

public saveDepartment() {
    if (this.systemInfoForm.invalid) return;

    const formValue = this.systemInfoForm.value;

    if (this.editing && this.selectedSystemInfo && this.selectedSystemInfo.DepartmentID) {
      this.service.updateDepartment(this.selectedSystemInfo.DepartmentID, formValue).subscribe({
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
      // Create new Department
      this.service.createDepartment(formValue).subscribe({
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

public deleteDepartment(systemInfo: Department) {
    if (!systemInfo.DepartmentID) return;
    this.service.deleteDepartment(systemInfo.DepartmentID).subscribe({
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

public hideDialog() {
    // this.systemInfoDialog = false;
  }

public formatDate(date: any): string {
    return date ? new Date(date).toLocaleDateString() : '';
  }
}
