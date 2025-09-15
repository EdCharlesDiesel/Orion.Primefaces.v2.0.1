
import {ConfirmationService, MessageService} from "primeng/api";
import {Component, OnInit} from "@angular/core";
import {DepartmentService} from "./department.service";
import {Department} from "../../../api/department.model";


@Component({
  selector: 'app-department.component.html',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class DepartmentComponent implements OnInit {
  systemInfoList: Department[] = [];
  systemInfoDialog: boolean = false;
  systemInfo: Department = {} as Department;
  selectedSystemInfo!: Department | null;
  loading: boolean = false;
  cols: any[] = [];

  constructor(
    private service: DepartmentService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.cols = [
      { field: 'transactionID', header: 'ID' },
      { field: 'productID', header: 'Product ID' },
      { field: 'referenceOrderID', header: 'Ref Order ID' },
      { field: 'referenceOrderLineID', header: 'Ref Line ID' },
      { field: 'transactionDate', header: 'Transaction Date' },
      { field: 'transactionType', header: 'Type' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'actualCost', header: 'Cost' },
      { field: 'modifiedDate', header: 'Modified' }
    ];
  }

  refresh() {
    this.loading = true;
    this.service.getDepartment().subscribe({
      next: (data) => {
        this.systemInfoList = data;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  openNew() {
    this.systemInfo = {} as Department;
    this.systemInfoDialog = true;
  }

  editSystemInfo(info: Department) {
    this.systemInfo = { ...info };
    this.systemInfoDialog = true;
  }

  saveDepartment() {
    if (this.systemInfo.DepartmentID) {
      // update
      this.service.updateDepartment(this.systemInfo).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Updated Successfully' });
        this.refresh();
      });
    } else {
      // create
      this.service.createDepartment(this.systemInfo).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Created Successfully' });
        this.refresh();
      });
    }
    this.systemInfoDialog = false;
  }

  deleteDepartmentDto(info: Department) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + info.DepartmentID + '?',
      accept: () => {
        this.service.deleteDepartment(info.DepartmentID!).subscribe(() => {
          this.systemInfoList = this.systemInfoList.filter(val => val.DepartmentID !== info.DepartmentID);
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Deleted Successfully' });
        });
      }
    });
  }

  hideDialog() {
    this.systemInfoDialog = false;
  }

  formatDate(date: any): string {
    return date ? new Date(date).toLocaleDateString() : '';
  }
}
