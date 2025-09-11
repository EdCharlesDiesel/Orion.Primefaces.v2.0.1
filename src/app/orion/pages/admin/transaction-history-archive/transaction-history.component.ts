import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TransactionHistoryArchiveDto } from '../../../api/transactionHistoryArchiveDto';
import { TransactionHistoryService } from './transaction-history.service';

@Component({
  selector: 'app-transaction-history-archive',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class TransactionHistoryArchiveComponent implements OnInit {
  systemInfoList: TransactionHistoryArchiveDto[] = [];
  systemInfoDialog: boolean = false;
  systemInfo: TransactionHistoryArchiveDto = {} as TransactionHistoryArchiveDto;
  selectedSystemInfo!: TransactionHistoryArchiveDto | null;
  loading: boolean = false;
  cols: any[] = [];

  constructor(
    private service: TransactionHistoryService,
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
    this.service.getTransactionHistoryArchive().subscribe({
      next: (data) => {
        this.systemInfoList = data;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  openNew() {
    this.systemInfo = {} as TransactionHistoryArchiveDto;
    this.systemInfoDialog = true;
  }

  editSystemInfo(info: TransactionHistoryArchiveDto) {
    this.systemInfo = { ...info };
    this.systemInfoDialog = true;
  }

  saveTransactionHistoryArchiveDto() {
    if (this.systemInfo.transactionID) {
      // update
      this.service.updateTransactionHistoryArchive(this.systemInfo).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Updated Successfully' });
        this.refresh();
      });
    } else {
      // create
      this.service.createTransactionHistoryArchive(this.systemInfo).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Created Successfully' });
        this.refresh();
      });
    }
    this.systemInfoDialog = false;
  }

  deleteTransactionHistoryArchiveDto(info: TransactionHistoryArchiveDto) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + info.transactionID + '?',
      accept: () => {
        this.service.deleteTransactionHistoryArchive(info.transactionID!).subscribe(() => {
          this.systemInfoList = this.systemInfoList.filter(val => val.transactionID !== info.transactionID);
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
