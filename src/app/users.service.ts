import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  private static user="noname";

  constructor() { }

  setUser(value){
    UsersService.user = value;
  }

  getUser(){
    return UsersService.user;
  }
}
