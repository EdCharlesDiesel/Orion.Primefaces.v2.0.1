import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {UserDialogComponent} from './user-dialog.component';
import {UserService} from '../../../services/user.service';
import {AuthService} from '../../../auth/auth-service.service';
import {User} from '../user.model';

@Component({
  selector: 'app-user-crud',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  template: `
    <mat-card class="user-card">
      <mat-card-header>
        <mat-card-title>
          <mat-icon>people</mat-icon>
          User Management
        </mat-card-title>
        <div class="header-actions">
          <button mat-raised-button color="primary" (click)="openDialog()">
            <mat-icon>add</mat-icon>
            Add User
          </button>
        </div>
      </mat-card-header>

      <mat-card-content>
        <div *ngIf="loading()" class="loading-container">
          <mat-spinner></mat-spinner>
        </div>

        <div *ngIf="!loading() && users().length > 0" class="table-container">
          <table mat-table [dataSource]="users()" class="user-table">
            <ng-container matColumnDef="id">
              <th mat-header-cell *matHeaderCellDef>ID</th>
              <td mat-cell *matCellDef="let user">{{ user.id }}</td>
            </ng-container>

            <ng-container matColumnDef="username">
              <th mat-header-cell *matHeaderCellDef>Username</th>
              <td mat-cell *matCellDef="let user">{{ user.username }}</td>
            </ng-container>

            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef>Name</th>
              <td mat-cell *matCellDef="let user">
                {{ user.name.firstname }} {{ user.name.lastname }}
              </td>
            </ng-container>

            <ng-container matColumnDef="email">
              <th mat-header-cell *matHeaderCellDef>Email</th>
              <td mat-cell *matCellDef="let user">{{ user.email }}</td>
            </ng-container>

            <ng-container matColumnDef="phone">
              <th mat-header-cell *matHeaderCellDef>Phone</th>
              <td mat-cell *matCellDef="let user">{{ user.phone }}</td>
            </ng-container>

            <ng-container matColumnDef="city">
              <th mat-header-cell *matHeaderCellDef>City</th>
              <td mat-cell *matCellDef="let user">{{ user.address.city }}</td>
            </ng-container>

            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef>Actions</th>
              <td mat-cell *matCellDef="let user">
                <button mat-icon-button color="primary" (click)="openDialog(user)">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button color="warn" (click)="deleteUser(user.id)">
                  <mat-icon>delete</mat-icon>
                </button>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
          </table>
        </div>

        <div *ngIf="!loading() && users().length === 0" class="no-data">
          <mat-icon>people_outline</mat-icon>
          <p>No users found</p>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .user-card {
      margin: 2rem auto;
      max-width: 1400px;
    }

    mat-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    mat-card-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .header-actions {
      display: flex;
      gap: 1rem;
    }

    .loading-container {
      display: flex;
      justify-content: center;
      padding: 3rem;
    }

    .table-container {
      overflow-x: auto;
    }

    .user-table {
      width: 100%;
    }

    .no-data {
      text-align: center;
      padding: 3rem;
      color: rgba(0, 0, 0, 0.5);
    }

    .no-data mat-icon {
      font-size: 3rem;
      width: 3rem;
      height: 3rem;
    }
  `]
})
export class UserCrudComponent implements OnInit {
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  users = signal<User[]>([]);
  loading = signal<boolean>(false);
  displayedColumns = ['id', 'username', 'name', 'email', 'phone', 'city', 'actions'];

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading.set(true);
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
        this.loading.set(false);
      },
      error: (error) => {
        this.showMessage('Error loading users');
        this.loading.set(false);
      }
    });
  }

  openDialog(user?: User): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '600px',
      data: user || null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id) {
          this.updateUser(result);
        } else {
          this.createUser(result);
        }
      }
    });
  }

  createUser(user: Partial<User>): void {
    this.userService.createUser(user).subscribe({
      next: (newUser) => {
        this.users.update(users => [...users, newUser]);
        this.showMessage('User created successfully');
      },
      error: () => this.showMessage('Error creating user')
    });
  }

  updateUser(user: User): void {
    this.userService.updateUser(user.id, user).subscribe({
      next: (updatedUser) => {
        this.users.update(users =>
          users.map(u => u.id === updatedUser.id ? updatedUser : u)
        );
        this.showMessage('User updated successfully');
      },
      error: () => this.showMessage('Error updating user')
    });
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.users.update(users => users.filter(u => u.id !== id));
          this.showMessage('User deleted successfully');
        },
        error: () => this.showMessage('Error deleting user')
      });
    }
  }

  logout(): void {
    this.authService.logout();
  }

  private showMessage(message: string): void {
    this.snackBar.open(message, 'Close', { duration: 3000 });
  }
}
