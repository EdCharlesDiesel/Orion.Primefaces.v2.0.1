//import { UserService } from './../../../services/user.service';
//import { User } from './../../../api/user';
import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { User } from "../../../api/user";
import { Table } from "primeng/table";
import { UserService } from "../../../services/user.service";

@Component({
    templateUrl: './add-users.component.html',
    providers: [MessageService]
})
export class AddUsersComponent implements OnInit {

    userDialog: boolean = false;
    deleteUserDialog: boolean = false;
    deleteUsersDialog: boolean = false;

    users: User[] = [];
    user: User = this.getEmptyUser();

    selectedUsers: User[] = [];
    submitted: boolean = false;

    cols: any[] = [];
    rowsPerPageOptions = [5, 10, 20];

    constructor(
        private userService: UserService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        // Fetch actual users
        // this.userService.getUsers().subscribe(data => this.users = data);

        this.cols = [
            { field: 'firstName', header: 'First Name' },
            { field: 'lastName', header: 'Last Name' },
            { field: 'username', header: 'Username' },
            { field: 'emailAddress', header: 'Email' },
            { field: 'role', header: 'Role' }
        ];
    }

    openNew() {
        this.user = this.getEmptyUser();
        this.submitted = false;
        this.userDialog = true;
    }

    editUser(user: User) {
        this.user = { ...user };
        this.userDialog = true;
    }

    deleteUser(user: User) {
        this.user = { ...user };
        this.deleteUserDialog = true;
    }

    deleteSelectedUsers() {
        this.deleteUsersDialog = true;
    }

    confirmDelete() {
        this.users = this.users.filter(val => val.id !== this.user.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
        this.deleteUserDialog = false;
        this.user = this.getEmptyUser();
    }

    confirmDeleteSelected() {
        this.users = this.users.filter(val => !this.selectedUsers.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Users Deleted', life: 3000 });
        this.deleteUsersDialog = false;
        this.selectedUsers = [];
    }

    saveUser() {
        this.submitted = true;

        this.user.username = "Khotso"
       this.user.id = this.createId();
                this.users.push(this.user);

                this.userService.registerUser(
                    {
                        id : "1",
                        code : "",
                        emailAddress: "Khotso@hotmai.com",
                        username :this.user.username = "Khotso",
                        birthday :999090,
                        idNumber : "999090",
                        firstName: "Khotso",
                        lastName : "Mokhethi",
                        image:"xxzczxc",
                        name : "Mokhethi",
                        isLoggedIn : true,
                        password :"asdfg",
                        role: "Web Master",
                        subscription : "Ultimate",
                        userTypeId : 2

                    }
                );
                // this.users[index] = this.user;
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Updated', life: 3000 });

        // if (this.user.firstName?.trim()) {
        //     if (this.user.id) {
        //         const index = this.findIndexById(this.user.id);
        //         if (index !== -1) {
        //             this.users[index] = this.user;
        //             this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Updated', life: 3000 });
        //         }
        //     } else {
        //         this.user.id = this.createId();
        //         this.users.push(this.user);
        //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000 });
        //     }

        //     this.users = [...this.users];
        //     this.userDialog = false;
        //     this.user = this.getEmptyUser();
        // }
    }

    hideDialog() {
        this.userDialog = false;
        this.submitted = false;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    findIndexById(id: string): number {
        return this.users.findIndex(u => u.id === id);
    }

    createId(): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    }

    private getEmptyUser(): User {
        return {
            id: undefined,
            firstName: '',
            lastName: '',
            username: '',
            idNumber: '',
            emailAddress: '',
            password: '',
            birthday: '',
            role: '',
            subscription: '',
            userTypeId: undefined,
            isLoggedIn: false,
            name: '',
            code: '',
            image: ''
        };
    }
}
