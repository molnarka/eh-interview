import { Component, Inject, Optional, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '@angular-advanced-sample/users/models';
import { ButtonComponent } from '@angular-advanced-sample/users/ui/button';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: '',
  standalone: true,
  imports: [CommonModule, ButtonComponent, MatCardModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<UserDetailsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public userData: User
  ) {
    this.user.set(this.userData);
  }

  public user: WritableSignal<User | null> = signal(null);

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
