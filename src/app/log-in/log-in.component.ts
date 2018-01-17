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
        this.user.setfavourites(response[0].favourites);
        this.user.setrecommended(response[0].recommended);
        this.user.setuserId(response[0].id);
        this.router.navigateByUrl('/search');
      }else{
        this.errorMessage = "Wrong login or password!!!"
      }
    })
  }


  ngOnInit() {
  }
 
}
