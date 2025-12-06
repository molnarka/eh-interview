import { createAction, props } from '@ngrx/store';
import { User } from '@angular-advanced-sample/dummy/model';

export const initUsers = createAction('[Users Page] Init');

export const loadUsersSuccess = createAction('[Users/API] Load Users Success', props<{ users: User[] }>());

export const loadUsersFailure = createAction('[Users/API] Load Users Failure', props<{ error: any }>());

export const deleteUser = createAction('[Users/delete] Delete User', props<{ userId: number }>());
