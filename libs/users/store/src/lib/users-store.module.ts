import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    // DO NOT DO THIS PLS
    // StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer),
    // EffectsModule.forFeature([UsersEffects]),
  ]
})
export class UsersStoreModule {}
