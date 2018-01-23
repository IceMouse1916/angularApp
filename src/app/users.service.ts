import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import {Router} from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class UsersService {
 
  constructor(private http: HttpClient, private router: Router) { }

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
    this.http.post('http://localhost:3000/users/', newUser).subscribe( resp => {
      this.logIn(login, password);
  });
    
  }

  private createNewUser(login, password){
    let newUser = {
      login: login,
      password: password,
      favourites: [],
      recommended: []
    }
    return newUser;
  }

  logIn(login, password){
      this.isUserExist(login, password).subscribe(response =>{
        if(response[0] !== undefined){ 
          this.updateUser(response[0])
          this.router.navigateByUrl('/search');
        }
      })
    }

  updateUserOnServer(id, user){
    this.http.put(`http://localhost:3000/users/${id}`, user).subscribe();
  }
}
