import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from '@angular-advanced-sample/users/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  public getData(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.apiUrl);
  }}
