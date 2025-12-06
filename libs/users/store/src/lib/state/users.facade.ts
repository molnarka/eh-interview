import { Injectable, inject } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectAllUsers } from "./users.selectors";
import { User } from "@angular-advanced-sample/users/models";
import * as UsersActions from './users.actions';

@Injectable({
  providedIn: 'root'
})
export class UsersFacade {
  private readonly store = inject(Store);

  getUsers(): Observable<User[]> {
    return this.store.pipe(select(selectAllUsers));
  }

  deleteUser(userId: number): void {
    this.store.dispatch(UsersActions.deleteUser({
      userId: userId
    }));
  }

  fetchUsers(): void {
    this.store.dispatch(UsersActions.initUsers());
  }
}
