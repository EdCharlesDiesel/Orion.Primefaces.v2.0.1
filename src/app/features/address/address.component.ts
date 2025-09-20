import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Address } from 'src/app/core/models/address.model';
import { AddressService } from './address.service';


@Component({
  selector: 'app-address',
   templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [MessageService]
})
export class AddressComponent implements OnInit {
  systemInfoList: Address[] = [];
  selectedSystemInfo!: Address | null;
  displayDialog: boolean = false;
  systemInfoForm!: FormGroup;
  editing: boolean = false;
  loading: boolean = false;
  cols: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: AddressService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.cols = [
      { field: 'AddressID', header: 'ID' },
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

  public loadData() {
    this.loading = true;
    this.service.getAddress().subscribe({
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

  public editSystemInfo(systemInfo: Address) {
    this.systemInfoForm.patchValue(systemInfo);
    this.selectedSystemInfo = systemInfo;
    this.displayDialog = true;
    this.editing = true;
  }

  public saveSystemInfo() {
    if (this.systemInfoForm.invalid) return;

    const formValue = this.systemInfoForm.value;

    if (this.editing && this.selectedSystemInfo && this.selectedSystemInfo.addressID) {
      // Update existing log
      this.service.updateAddress(this.selectedSystemInfo.addressID, formValue).subscribe({
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
      this.service.createAddress(formValue).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Log added successfully' });
          this.loadData();
          this.hideDialog();
        },
        error: (err: any) => {
          console.error(err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to create log' });
        }
      });
    }
  }

  // public deleteSystemInfo(systemInfo: Address) {
  //   if (!systemInfo.AddressID) return;
  //   this.service.deleteAddress(systemInfo.AddressID).subscribe({
  //     next: () => {
  //       this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Log deleted successfully' });
  //       this.loadData();
  //     },
  //     error: (err: any) => {
  //       console.error(err);
  //       this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete log' });
  //     }
  //   });
  // }


  
  public hideDialog() {
    this.displayDialog = false;
    this.selectedSystemInfo = null;
  }

  public onRowSelect(event: any) {
    this.selectedSystemInfo = event.data;
    this.displayDialog = true;
  }
}
