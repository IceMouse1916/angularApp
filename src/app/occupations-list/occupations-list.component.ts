import { Component, OnInit, Input } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'nk-occupations-list',
  templateUrl: './occupations-list.component.html',
  styleUrls: ['./occupations-list.component.css']
})
export class OccupationsListComponent implements OnInit {

  @Input()
  nkDataToRender;

  constructor( private user: UsersService) { }
  
  ngOnInit() {
    this.user.currentUser.subscribe(response => {
      this.recommended = response["recommended"];
    })
    this.user.currentUser.subscribe(response => {
      this.favourite = response["favourites"];
      
    })
  
  }

  favourite;
  recommended;

  isThatOccupation(id, array){
    for(let index in array){
      if(array[index].id === id){
        return true;
      }
    }
    return false;
  }


}
