import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MessageService} from "primeng/api";
import { CountryRegion } from 'src/app/core/models/country-region.model';
import { CountryRegionsService } from './country-regions.service';


@Component({
  selector: 'app-country-region',
  templateUrl: './country-region.component.html',
  styleUrls: ['./country-region.component.scss'],
  providers: [MessageService]   // <-- Add this
})
export class CountryRegionComponent implements OnInit {
  systemInfoList: CountryRegion[] = [];
  selectedSystemInfo!: CountryRegion | null;
  displayDialog: boolean = false;
  systemInfoForm!: FormGroup;
  editing: boolean = false;
  loading: boolean = false;
  cols: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: CountryRegionsService,
    private messageService: MessageService
) {}

  ngOnInit() {
    this.cols = [
      { field: 'CountryRegionID', header: 'ID' },
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
    this.service.getCountryRegion().subscribe({
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


public editSystemInfo(systemInfo: CountryRegion) {
    this.systemInfoForm.patchValue(systemInfo);
    this.selectedSystemInfo = systemInfo;
    this.displayDialog = true;
    this.editing = true;
  }

public saveCountryRegion() {
    if (this.systemInfoForm.invalid) return;

    const formValue = this.systemInfoForm.value;

    if (this.editing && this.selectedSystemInfo && this.selectedSystemInfo.country-regionID) {
      this.service.updateCountryRegion(this.selectedSystemInfo.country-regionID, formValue).subscribe({
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
      // Create new CountryRegion
      this.service.createCountryRegion(formValue).subscribe({
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

public deleteCountryRegion(systemInfo: CountryRegion) {
    if (!systemInfo.country-regionID) return;
    this.service.deleteCountryRegion(systemInfo.country-regionID).subscribe({
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
