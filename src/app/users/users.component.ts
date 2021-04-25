import { Component, OnInit } from '@angular/core';

export enum Sort {
  Up = 'up',
  Down = 'down',
  No = 'no',
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = [];
  Sort = Sort;
  sortedByMemberName: Sort;
  sortedByMobile: Sort;
  sortedByEmail: Sort;
  sortedByStatus: Sort;

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
    this.sortedByMemberName = Sort.No;
    this.sortedByMobile = Sort.No;
    this.sortedByEmail = Sort.No;
    this.sortedByStatus = Sort.No;
  }

  sortByMemberName() {
    this.sortedByMobile = Sort.No;
    this.sortedByEmail = Sort.No;
    this.sortedByStatus = Sort.No;
    if (
      this.sortedByMemberName === Sort.No ||
      this.sortedByMemberName === Sort.Up
    ) {
      this.sortedByMemberName = Sort.Down;
      this.users.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      this.sortedByMemberName = Sort.Up;
      this.users.sort((a, b) => (a.name < b.name ? 1 : -1));
    }
  }

  sortByMobile() {
    this.sortedByMemberName = Sort.No;
    this.sortedByEmail = Sort.No;
    this.sortedByStatus = Sort.No;
    if (this.sortedByMobile === Sort.No || this.sortedByMobile === Sort.Up) {
      this.sortedByMobile = Sort.Down;
      this.users.sort((a, b) => (a.mobile > b.mobile ? 1 : -1));
    } else {
      this.sortedByMobile = Sort.Up;
      this.users.sort((a, b) => (a.mobile < b.mobile ? 1 : -1));
    }
  }

  sortByEmail() {
    this.sortedByMobile = Sort.No;
    this.sortedByMemberName = Sort.No;
    this.sortedByStatus = Sort.No;
    if (this.sortedByEmail === Sort.No || this.sortedByEmail === Sort.Up) {
      this.sortedByEmail = Sort.Down;
      this.users.sort((a, b) => (a.email > b.email ? 1 : -1));
    } else {
      this.sortedByEmail = Sort.Up;
      this.users.sort((a, b) => (a.email < b.email ? 1 : -1));
    }
  }

  sortByStatus() {
    this.sortedByMobile = Sort.No;
    this.sortedByMemberName = Sort.No;
    this.sortedByEmail = Sort.No;
    if (this.sortedByStatus === Sort.No || this.sortedByStatus === Sort.Up) {
      this.sortedByStatus = Sort.Down;
      this.users.sort((a, b) => (a.status > b.status ? 1 : -1));
    } else {
      this.sortedByStatus = Sort.Up;
      this.users.sort((a, b) => (a.status < b.status ? 1 : -1));
    }
  }
}
