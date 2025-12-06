import { Component, Inject, Optional, Signal, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@angular-advanced-sample/dummy/model';
import { ButtonComponent } from '@angular-advanced-sample/users/ui/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lib-confirmation-popup',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './confirmation-popup.component.html',
  styleUrl: './confirmation-popup.component.css',
})
export class ConfirmationPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public userData: User
  ) {
    console.log('userData from confirmation component: ', this.userData);
    this.user.set(this.userData);
  }

  public user: WritableSignal<User | null> = signal(null);

  public buttonClicked(isConfirmed: boolean): void {
    this.dialogRef.close({ userDecision: isConfirmed }); // Optionally you can create an interface for this
  }
}
