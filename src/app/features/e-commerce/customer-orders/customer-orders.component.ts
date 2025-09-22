import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {SalesOrderDetailsService} from "./customer-orders.service";

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('* <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CustomerOrdersComponent implements OnInit, OnDestroy {

  //TODO: Need to fix this and use Primefaces Table dat and data source.
  displayedColumns: string[] = ['orderId', 'orderedOn', 'orderTotal'];
  // dataSource = new MatTableDataSource<SalesOrderDetail>();
  expandedElement: any;
  // @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
  //
  //   /*
  //   * Since we are using *ngIf with mat-table.
  //   * Refer - https://github.com/angular/components/issues/15008#issuecomment-516386055
  //   */
  //   this.dataSource.paginator = mp;
  // }
  userId;
  isLoading: boolean = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private orderService: SalesOrderDetailsService) {

    this.userId= JSON.parse(localStorage.getItem('userId') || '{}');
  }

  ngOnInit() {
    this.isLoading = true;
    this.getMyOrderDetails();
  }

  getMyOrderDetails() {
    this.orderService.myOrderDetails(this.userId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result: any) => {
        if (result != null) {
          // this.dataSource.data = Object.values(result);
          this.isLoading = false;

        }

      }, (error: any) => {
        console.log('Error occurred while fetching my order details : ', error);
      });
  }

  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
