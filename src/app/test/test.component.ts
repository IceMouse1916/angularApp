import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

import { OccupationsService } from '../occupations.service';

import {Router} from '@angular/router';

@Component({
  selector: 'nk-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private user: UsersService, private occupationService: OccupationsService, private router: Router) { }

  questions;
  score;
  userName;
  testVisibility;

  ngOnInit() {
    this.questions = [
      {id : 0, text : "I am perfectionist"},
      {id : 1, text : "I like changes"},
      {id : 2, text : "I am able to take a rist to continue what I've started"},
      {id : 3, text : "I am focus on my aims"},
      {id : 4, text : "I love traveling"},
      {id : 5, text : "I like spending time alone"},
      {id : 6, text : "Red is my favourite color"}
    ];
    this.score = 0;
    this.user.currentUser.subscribe(response => {
      this.userName = response["login"];
    });
    this.testVisibility = false;
  }

  incScore(){
    this.score++;
  }

  decScore(){
    if(this.score > 0)
      this.score--;
  }

  showTest(){
    this.testVisibility = true;
  }

  sendAnswers(){
    let user;
    let start;
    let end;
    this.user.currentUser.subscribe(response => user = response);

    // very simple logic :)
    if(this.score > 3){
      start = 0;
      end = 8;
    }else{
      start = 20;
      end = 24;
    }

    this.occupationService.getChosenOccupations(`?_start=${start}&_end=${end}`).subscribe(response => {
      user.recommended = response;
      this.user.updateUser(user);
      this.user.updateUserOnServer(user.id, user);
      this.router.navigateByUrl('/recommended');
    });
    
  }
}
