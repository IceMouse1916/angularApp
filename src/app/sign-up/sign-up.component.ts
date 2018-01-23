import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'nk-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }


  signUp(login, password){
    this.userService.registerNewUser(login, password);
  }
}
