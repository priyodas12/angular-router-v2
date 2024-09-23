import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../users/page';
import { User } from '../users/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private getAPI = 'http://localhost:12003/api/v1/users'; // Spring Boot API URL
  private postAPI = 'http://localhost:12003/api/v1/user'; // Spring Boot API URL

  constructor(private http: HttpClient) {}

  saveUser(user: User): Observable<User> {
    console.log('UserService:saveUser');
    return this.http.post<User>(this.postAPI, user);
  }

  getAllUsers(): Observable<User[]> {
    console.log('UserService:getAllUsers');
    return this.http.get<User[]>(this.getAPI);
  }
  getPaginatedUsers(page: number, size: number): Observable<Page<User>> {
    return this.http.get<Page<User>>(
      `${this.getAPI}/page=${page}/size=${size}`
    );
  }
}
