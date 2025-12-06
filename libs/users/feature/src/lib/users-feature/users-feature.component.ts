import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as UsersActions from '@angular-advanced-sample/users/store';
import { User } from '@angular-advanced-sample/users/models';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, filter, first } from 'rxjs';
import { UserCardComponent } from '@angular-advanced-sample/users/ui/user-card';
import { MatDialog, MatDialogRef, } from '@angular/material/dialog';
import { ConfirmationPopupComponent } from '@angular-advanced-sample/users/ui/confirmation-popup';
import { UserDetailsComponent } from '@angular-advanced-sample/users/ui/user-details';

@Component({
  selector: 'lib-users-feature',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './users-feature.component.html',
  styleUrl: './users-feature.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersFeatureComponent {
  constructor(
    private dialog: MatDialog,
    private usersFacadeService: UsersActions.UsersFacade
  ) {
    this.usersFacadeService.fetchUsers();
  }

  // With signals: You do not need to handle subscriptions and unsubscriptions, signals will do the work in the background
  public users: Signal<User[] | undefined> = toSignal(this.usersFacadeService.getUsers());

  // With pure rxjs: Manual (un)subscriptions, if you use | async pipe in the template => x async pipe === x subscriptions
  public users$: Observable<User[] | undefined> = this.usersFacadeService.getUsers();;

  public deleteClickHandler(userId: number): void {
    console.log('Delete button has been pressed for this user: ', userId);
    const dialogRef: MatDialogRef<ConfirmationPopupComponent> = this.dialog.open(ConfirmationPopupComponent, {
      data: this.users()?.find((user: User) => user.id === userId)
    });

    dialogRef.afterClosed().pipe(
      first(),
      filter((userDecisionObj: { userDecision: boolean }) => userDecisionObj.userDecision)
    ).subscribe(() => {
      this.usersFacadeService.deleteUser(userId);
    })
  }

  public detailsClickHandler(userId: number): void {
    console.log('Details button has been pressed for this user: ', userId)

    const dialogRef: MatDialogRef<UserDetailsComponent> = this.dialog.open(UserDetailsComponent, {
      data: this.users()?.find((user: User) => user.id === userId)
    });
  }
}
