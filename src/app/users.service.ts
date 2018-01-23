import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UsersService {
 
  constructor(private http: HttpClient) { }

  private userSource = new BehaviorSubject([]);
  currentUser = this.userSource.asObservable();

  updateUser(user){
    this.userSource.next(user);
  }

  isUserExist(login, password){
    return this.http.get('http://localhost:3000/users?login='+login+'&password='+password);
  }

  registerNewUser(login, password){
    let newUser = this.createNewUser(login, password);
    console.log(newUser);
    this.http.post('http://localhost:3000/users/', newUser).subscribe();
  }

  private createNewUser(login, password){
    let newUser={
      login: login,
      password: password,
      favourite: [],
      recommended: []
    }
    return newUser;
  }

}
