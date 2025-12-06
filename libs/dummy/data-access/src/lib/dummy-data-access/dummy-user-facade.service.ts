import { Injectable } from '@angular/core';
import { User, UserResponse } from '@angular-advanced-sample/dummy/model';
import { firstValueFrom } from 'rxjs';
import { DummyUsersService } from '@angular-advanced-sample/dummy/data-access';

@Injectable({
  providedIn: 'root'
})
export class DummyUserFacadeService {
  constructor(private dummyUserService: DummyUsersService) {}

  public async getUsersWithGreenEye(): Promise<User[]> {
    const users: UserResponse = await firstValueFrom(this.dummyUserService.getData());
    console.log('users -> ', users);
    return users.users.filter((user: User) => user.eyeColor === 'Green');
  }
}
