import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

import {Router} from '@angular/router';

@Component({
  selector: 'nk-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor( private user: UsersService, private router: Router) { }

  errorMessage;

  logIn(login, password){
    this.user.isUserExist(login, password).subscribe(response =>{
      if(response[0] !== undefined){ 
        this.user.setUser(response[0].login);
        this.router.navigateByUrl('/search');
      }else{
        this.errorMessage = "Wrong login or password!!!"
      }
    })
  }


  ngOnInit() {
  }
 
}
