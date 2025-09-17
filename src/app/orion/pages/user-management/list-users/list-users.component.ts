import {Component, OnInit} from "@angular/core";
import {MessageService} from "primeng/api";
import {Table} from "primeng/table";
import {Customer} from "../../../api/customer";
import {FormGroup, Validators} from "@angular/forms";
import {UserManagementService} from "../user-management.service";
import {Person} from "../../../api/person.model";
@Component({
    templateUrl: './list-users.component.html',
    providers: [MessageService]
})
export class ListUsersComponent implements OnInit {
  systemInfoList: Person[] = [];
  selectedSystemInfo!: Person | null;
  displayDialog: boolean = false;
  systemInfoForm!: FormGroup;
  editing: boolean = false;
  loading: boolean = false;
  cols: any[] = [];
  customers!: Customer[];
  statuses!: any[];
  activityValues: number[] = [0, 100];
  Customers$: any;

  constructor(private userManagementService: UserManagementService) {}

  ngOnInit() {

    // this.cols = [
    //   { field: 'databaseLogID', header: 'ID' },
    //   { field: 'postTime', header: 'Post Time' },
    //   { field: 'databaseUser', header: 'Database User' },
    //   { field: 'event', header: 'Event' },
    //   { field: 'schema', header: 'Schema' },
    //   { field: 'object', header: 'Object' },
    //   { field: 'tsql', header: 'TSQL' },
    //   { field: 'xmlEvent', header: 'XML Event' }
    // ];
    //
    // this.systemInfoForm = this.fb.group({
    //   postTime: [new Date().toISOString(), Validators.required], // auto-fill current time
    //   databaseUser: ['', Validators.required],
    //   event: ['', Validators.required],
    //   schema: [''],
    //   object: [''],
    //   tsql: [''],
    //   xmlEvent: ['']
    // });

    this.loadData();
    // this.customerService.getCustomersLarge().then((customers) => {
    //   debugger;
    //   this.customers = customers;
    //   this.loading = false;
    //
    // //  this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
    //
    //   this.Customers$ = this.customerService.customers$
    //     .pipe(tap((data: any)=>{console.log('Customers from the database',data)}))
    //     .subscribe(
    //       (categoryData: any [] ) => {
    //         this.categoryList = categoryData;
    //       }, error => {
    //         console.log('Error ocurred while fetching category List : ', error);
    //       });;
    //   console.log('Customers Details',this.Customers$);
    // });
    // this.Customers$ = this.customerService.customers$
    //   .pipe(tap((data: any)=>{console.log('Customers from the database',data)}))
    // .subscribe(
    //   (customerData: any [] ) => {
    //     this.customers = customerData;
    //   }, error => {
    //     console.log('Error occurred while fetching customer list : ', error);
    //   });;
    // this.loading = false;
    // console.log('Customers Details',this.Customers$);
    // // this.representatives = [
    // //   { name: 'Amy Elsner', image: 'amyelsner.png' },
    // //   { name: 'Anna Fali', image: 'annafali.png' },
    // //   { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    // //   { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    // //   { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    // //   { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    // //   { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    // //   { name: 'Onyama Limba', image: 'onyamalimba.png' },
    // //   { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    // //   { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    // // ];
    // //
    // this.statuses = [
    //   { label: 'Unqualified', value: 'unqualified' },
    //   { label: 'Qualified', value: 'qualified' },
    //   { label: 'New', value: 'new' },
    //   { label: 'Negotiation', value: 'negotiation' },
    //   { label: 'Renewal', value: 'renewal' },
    //   { label: 'Proposal', value: 'proposal' }
    // ];
  }

  public loadData() {
    this.loading = true;
    this.userManagementService.getUsers().subscribe({
      next: data => {
        this.systemInfoList = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  public clear(table: Table) {
    table.clear();
  }

  public getSeverity(status: string): any {
     switch (status.toLowerCase()) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return null;
    }
  }
}
