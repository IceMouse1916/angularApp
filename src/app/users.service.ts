import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  private static user="Noname";
  private static favourites=[];
  private static recommended=[];
  private static userId;

  constructor(private http: HttpClient) { }

  setUser(value){
    UsersService.user = value;
  }

  getUser(){
    return UsersService.user;
  }

  setfavourites(value){
    UsersService.favourites = value;
  }

  getfavourites(){
    return UsersService.favourites;
  }

  setrecommended(value){
    UsersService.recommended = value;
  }

  getrecommended(){
    return UsersService.recommended;
  }

  setuserId(value){
    UsersService.userId = value;
  }

  getuserID(){
    return UsersService.userId;
  }

  isUserExist(login, password){
    return this.http.get('http://localhost:3000/users?login='+login+'&password='+password);
  }

}
