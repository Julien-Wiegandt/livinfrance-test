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
        photo: 'user8-avatar.jpg',
        name: 'Agnès Mailliu',
        mobile: '+6 589 54 23',
        email: 'mailliu@gmail.com',
        status: true,
      },
      {
        photo: 'user2-avatar.jfif',
        name: 'Vanessa Paradi',
        mobile: '+6 874 54 75',
        email: 'paradi@gmail.com',
        status: false,
      },
      {
        photo: 'user9-avatar.jfif',
        name: 'Sophie Miracle',
        mobile: '+6 874 58 55',
        email: 'miracle@gmail.com',
        status: false,
      },
      {
        photo: 'user10-avatar.jfif',
        name: 'Catherine Jolie',
        mobile: '+6 554 21 65',
        email: 'jolie@gmail.com',
        status: true,
      },
      {
        photo: 'user11-avatar.jfif',
        name: 'Josette Dupond',
        mobile: '+9 547 87 64',
        email: 'dupond@gmail.com',
        status: false,
      },
    ];
  }
}
