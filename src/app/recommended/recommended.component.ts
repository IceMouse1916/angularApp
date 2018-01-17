import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'nk-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  constructor(private user: UsersService) { }

  data;

  ngOnInit() {
    this.user.currentUser.subscribe(response => {
      this.data = response["recommended"];
    })
  }

  delete(){
    let user;
    this.user.currentUser.subscribe(response => user = response);
    user.recommended.pop();
    this.user.updateUser(user);
  }

}
