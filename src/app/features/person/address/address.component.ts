import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MessageService} from "primeng/api";
import { Address } from 'src/app/core/models/address.model';
import { AddressService } from './address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [MessageService]   // <-- Add this
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
    this.service.getAddresss().subscribe({
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

public saveAddress() {
    if (this.systemInfoForm.invalid) return;

    const formValue = this.systemInfoForm.value;

    if (this.editing && this.selectedSystemInfo && this.selectedSystemInfo.addressID) {
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
      // Create new Address
      this.service.createAddress(formValue).subscribe({
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

public deleteAddress(systemInfo: Address) {
    if (!systemInfo.addressID) return;
    this.service.deleteAddress(systemInfo.addressID).subscribe({
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
