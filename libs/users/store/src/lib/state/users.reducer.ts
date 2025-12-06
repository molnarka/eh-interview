import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action, createFeature } from '@ngrx/store';

import * as UsersActions from './users.actions';
import { User } from '@angular-advanced-sample/dummy/model';

export const USERS_FEATURE_KEY = 'users';

export interface UsersState extends EntityState<User> {
  selectedId?: string | number; // which Users record has been selected
  loaded: boolean; // has the Users list been loaded
  error?: string | null; // last known error (if any)
  // sessions: //entity state
  // Entity state a store type-ra array
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: UsersState;
}

export const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialUsersState: UsersState = usersAdapter.getInitialState({
  loaded: false,
});

const reducer = createReducer(
  initialUsersState,
  on(UsersActions.initUsers, state => ({ ...state, loaded: false, error: null })),
  on(UsersActions.loadUsersSuccess, (state, { users }) => usersAdapter.setAll(users, { ...state, loaded: true })),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({ ...state, error })),
  on(UsersActions.deleteUser, (state, { userId }) => usersAdapter.removeOne(userId, { ...state })),
);



// TODO: investigate why this is throwing error
// export const usersFeature = createFeature({
//   name: 'users',
//   reducer: createReducer(
//     initialUsersState,
//     on(UsersActions.initUsers, (state) => ({
//       ...state,
//       loaded: false,
//       error: null
//     }))
//   ),
//   extraSelectors: {}
// });

export function usersReducer(state: UsersState | undefined, action: Action) {
  return reducer(state, action);
}
