import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { UserService } from '../service/user.service';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  currentPage: number = 0;
  totalPages: number = 0;
  pageSize: number = 10;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchPaginatedUsers();
  }

  fetchPaginatedUsers(): void {
    this.userService
      .getPaginatedUsers(this.currentPage, this.pageSize)
      .subscribe(
        (data) => {
          console.log(data);
          this.users = data.content; // Use data.content to get the list of users
          this.totalPages = data.totalPages; // Use data.totalPages for total pages
        },
        (error) => {
          console.error('Error fetching paginated users', error);
        }
      );
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.fetchPaginatedUsers();
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.fetchPaginatedUsers();
    }
  }
  addUser() {
    const newUser: User = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      gender: faker.helpers.arrayElement(['Male', 'Female', 'Others']),
    };

    this.userService.saveUser(newUser).subscribe(
      (savedUser) => {
        console.log('new user', newUser);
        this.users.push(savedUser); // Add to the users array
        console.log('User added', savedUser);
      },
      (error) => {
        console.error('Error adding user', error);
      }
    );
  }
}
