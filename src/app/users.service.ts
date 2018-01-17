import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  private static user="Noname";

  constructor(private http: HttpClient) { }

  setUser(value){
    UsersService.user = value;
  }

  getUser(){
    return UsersService.user;
  }

  isUserExist(login, password){
    return this.http.get('http://localhost:3000/users?login='+login+'&password='+password);
  }

}
