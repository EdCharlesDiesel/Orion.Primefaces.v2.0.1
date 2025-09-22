import {Component, OnInit} from "@angular/core";
import {MessageService} from "primeng/api";
import {Table} from "primeng/table";
import {UserManagementService} from "../../../services/user-management.service";


// noinspection MagicNumberJS
@Component({
  templateUrl: './add-users.component.html',
  providers: [MessageService]
})
export class AddUsersComponent implements OnInit {

  userDialog: boolean = false;
  deleteUserDialog: boolean = false;
  deleteUsersDialog: boolean = false;

  users: Person[] = [];
  user: Person = this.getEmptyUser();

  selectedUsers: Person[] = [];
  submitted: boolean = false;

  cols: any[] = [];
  rowsPerPageOptions = [5, 10, 20];

  constructor(
    private userService: UserManagementService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    // Fetch actual users
    this.userService.getUsers().subscribe(data => this.users = data);

    this.cols = [
      {field: 'firstName', header: 'First Name'},
      {field: 'lastName', header: 'Last Name'},
      {field: 'username', header: 'Username'},
      {field: 'emailAddress', header: 'Email'},
      {field: 'role', header: 'Role'}
    ];
  }

  openNew() {
    this.user = this.getEmptyUser();
    this.submitted = false;
    this.userDialog = true;
  }

  editUser(user: Person) {
    this.user = {...user};
    this.userDialog = true;
  }

  deleteUser(user: Person) {
    this.user = {...user};
    this.deleteUserDialog = true;
  }

  deleteSelectedUsers() {
    this.deleteUsersDialog = true;
  }

  confirmDelete() {
    this.users = this.users.filter(val => val.businessEntityID !== this.user.businessEntityID);
    this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
    this.deleteUserDialog = false;
    this.user = this.getEmptyUser();
  }

  confirmDeleteSelected() {
    this.users = this.users.filter(val => !this.selectedUsers.includes(val));
    this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Users Deleted', life: 3000});
    this.deleteUsersDialog = false;
    this.selectedUsers = [];
  }

  saveUser() {
    this.submitted = true;

    // this.user. = "Khotso"
    //TODO: Need to fix this
    this.user.businessEntityID = this.createId();
    this.users.push(this.user);

    this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Updated', life: 3000});

    if (this.user.firstName?.trim()) {
      if (this.user.businessEntityID) {
        const index = this.findIndexById(this.user.businessEntityID);
        if (index !== -1) {
          this.users[index] = this.user;
          this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Updated', life: 3000});
        }
      } else {
        this.user.businessEntityID = this.createId();
        this.users.push(this.user);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000});
      }

      this.users = [...this.users];
      this.userDialog = false;
      this.user = this.getEmptyUser();
    }
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  findIndexById(id: number): number {
    return this.users.findIndex(u => u.businessEntityID === id);
  }

  createId(): any {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({length: 8}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  private getEmptyUser(): Person {
    return new Person();
  }

  onAvatarUpload($event: any) {

  }
}
