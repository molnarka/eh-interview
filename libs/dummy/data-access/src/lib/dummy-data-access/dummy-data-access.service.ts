import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '@angular-advanced-sample/dummy/model';

@Injectable({
  providedIn: 'root'
})
// This usually a complex library with a lot of dependencies and functions

// From the Domain Driven Design side, this is the service which actually handles he whole state or in this case getting the data
export class DummyUsersService {

  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  public getData(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.apiUrl);
  }
}
