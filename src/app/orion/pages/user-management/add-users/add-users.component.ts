import {Component, OnInit} from "@angular/core";
import {MessageService} from "primeng/api";
import {User} from "../../../api/user";
import {Table} from "primeng/table";
import {UserService} from "../../../services/user.service"



@Component({
    templateUrl: './add-users.component.html',
    providers: [MessageService]
})
export class AddUsersComponent implements OnInit {

    UserDialog: boolean = false;

    deleteUserDialog: boolean = false;

    deleteUsersDialog: boolean = false;

    Users: User[] = [];

    User: User = {
        id: undefined,
        firstName: undefined,
        lastName: undefined,
        username: undefined,
        idNumber: undefined,
        emailAddress: undefined,
        password: undefined,
        birthday: undefined,
        role: undefined,
        subscription: undefined,
        userTypeId: undefined,
        isLoggedIn: undefined,
        name: undefined,
        code: undefined,
        image: undefined
    };

    selectedUsers: User[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private UserService: UserService, private messageService: MessageService) { }

    ngOnInit() {
     //   this.UserService.getUsers().then(data => this.Users = data);

        this.cols = [
            { field: 'User', header: 'User' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' }
        ];

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
    }

    openNew() {
        this.User = {   id: undefined,
        firstName: undefined,
        lastName: undefined,
        username: undefined,
        idNumber: undefined,
        emailAddress: undefined,
        password: undefined,
        birthday: undefined,
        role: undefined,
        subscription: undefined,
        userTypeId: undefined,
        isLoggedIn: undefined,
        name: undefined,
        code: undefined,
        image: undefined};
        this.submitted = false;
        this.UserDialog = true;
    }

    deleteSelectedUsers() {
        this.deleteUsersDialog = true;
    }

    editUser(User: User) {
        this.User = { ...User };
        this.UserDialog = true;
    }

    deleteUser(User: User) {
        this.deleteUserDialog = true;
        this.User = { ...User };
    }

    confirmDeleteSelected() {
        this.deleteUsersDialog = false;
        this.Users = this.Users.filter(val => !this.selectedUsers.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Users Deleted', life: 3000 });
        this.selectedUsers = [];
    }

    confirmDelete() {
        this.deleteUserDialog = false;
        this.Users = this.Users.filter(val => val.id !== this.User.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
        this.User = {   id: undefined,
        firstName: undefined,
        lastName: undefined,
        username: undefined,
        idNumber: undefined,
        emailAddress: undefined,
        password: undefined,
        birthday: undefined,
        role: undefined,
        subscription: undefined,
        userTypeId: undefined,
        isLoggedIn: undefined,
        name: undefined,
        code: undefined,
        image: undefined};
    }

    hideDialog() {
        this.UserDialog = false;
        this.submitted = false;
    }

    saveUser() {
        this.submitted = true;

        if (this.User.name?.trim()) {
            if (this.User.id) {
                // @ts-ignore
                this.User.inventoryStatus = this.User.inventoryStatus.value ? this.User.inventoryStatus.value : this.User.inventoryStatus;
                this.Users[this.findIndexById(this.User.id)] = this.User;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Updated', life: 3000 });
            } else {
                this.User.id = this.createId();
                this.User.code = this.createId();
                this.User.image = 'User-placeholder.svg';
                // @ts-ignore
                this.User.inventoryStatus = this.User.inventoryStatus ? this.User.inventoryStatus.value : 'INSTOCK';
                this.Users.push(this.User);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000 });
            }

            this.Users = [...this.Users];
            this.UserDialog = false;
            this.User = {   id: undefined,
        firstName: undefined,
        lastName: undefined,
        username: undefined,
        idNumber: undefined,
        emailAddress: undefined,
        password: undefined,
        birthday: undefined,
        role: undefined,
        subscription: undefined,
        userTypeId: undefined,
        isLoggedIn: undefined,
        name: undefined,
        code: undefined,
        image: undefined};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.Users.length; i++) {
            if (this.Users[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
