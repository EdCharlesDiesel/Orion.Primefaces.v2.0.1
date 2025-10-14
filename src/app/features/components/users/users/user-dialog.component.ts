import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {User} from '../user.model';


@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  template: `
    <h2 mat-dialog-title>{{ data ? 'Edit User' : 'Add User' }}</h2>
    <mat-dialog-content>
      <form #userForm="ngForm">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Username</mat-label>
          <input matInput [(ngModel)]="formData.username" name="username" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Email</mat-label>
          <input matInput type="email" [(ngModel)]="formData.email" name="email" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>First Name</mat-label>
          <input matInput [(ngModel)]="formData.name.firstname" name="firstname" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Last Name</mat-label>
          <input matInput [(ngModel)]="formData.name.lastname" name="lastname" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Phone</mat-label>
          <input matInput [(ngModel)]="formData.phone" name="phone" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>City</mat-label>
          <input matInput [(ngModel)]="formData.address.city" name="city" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Street</mat-label>
          <input matInput [(ngModel)]="formData.address.street" name="street" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Zipcode</mat-label>
          <input matInput [(ngModel)]="formData.address.zipcode" name="zipcode" required>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-raised-button color="primary" (click)="onSave()" [disabled]="!userForm.valid">
        Save
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    mat-dialog-content {
      min-width: 500px;
    }

    .full-width {
      width: 100%;
      margin-bottom: 1rem;
    }
  `]
})
export class UserDialogComponent {
  dialogRef = inject(MatDialogRef<UserDialogComponent>);
  data: User | null = inject(MAT_DIALOG_DATA);

  formData: any = {
    id: this.data?.id || null,
    username: this.data?.username || '',
    email: this.data?.email || '',
    password: this.data?.password || 'password123',
    name: {
      firstname: this.data?.name?.firstname || '',
      lastname: this.data?.name?.lastname || ''
    },
    address: {
      city: this.data?.address?.city || '',
      street: this.data?.address?.street || '',
      number: this.data?.address?.number || 0,
      zipcode: this.data?.address?.zipcode || '',
      geolocation: {
        lat: this.data?.address?.geolocation?.lat || '-37.3159',
        long: this.data?.address?.geolocation?.long || '81.1496'
      }
    },
    phone: this.data?.phone || ''
  };

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.formData);
  }
}
