import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = [];

  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        photo: 'user7-avatar.jfif',
        name: 'George Lindelot',
        mobile: '+4 345 32 65',
        email: 'lindelot@gmail.com',
        status: true,
      },
      {
        photo: 'user3-avatar.jfif',
        name: 'Eric Dyer',
        mobile: '+2 165 65 98',
        email: 'dyer@gmail.com',
        status: false,
      },
      {
        photo: 'user6-avatar.jfif',
        name: 'Haitam Alessami',
        mobile: '+6 658 65 21',
        email: 'alessami@gmail.com',
        status: false,
      },
      {
        photo: 'user5-avatar.jfif',
        name: 'Michael Campbel',
        mobile: '+2 654 87 15',
        email: 'campbel@gmail.com',
        status: false,
      },
      {
        photo: 'user4-avatar.jfif',
        name: 'Ashley Williams',
        mobile: '+6 358 98 44',
        email: 'williams@gmail.com',
        status: true,
      },
      {
        photo: 'user2-avatar.jfif',
        name: 'Vanessa Paradi',
        mobile: '+6 874 54 75',
        email: 'paradi@gmail.com',
        status: false,
      },
    ];
  }
}
