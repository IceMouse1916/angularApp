import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'nk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private user: UsersService) { }

  userName;

  ngOnInit() {
    this.user.currentUser.subscribe(response => {
      this.userName = response["login"];
    })
  }

}
