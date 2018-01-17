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


  data;
  recommended;

  constructor(private user: UsersService) { }
  
  ngOnInit() {
    this.data = this.user.getfavourites();
    this.recommended = this.user.getrecommended();
  }


  isFavouirite(id){
    for(let index in this.data){
      if(this.data[index].id === id)
        return true;
    }
  }

  isRecommended(id){
    for(let index in this.recommended){
      if(this.recommended[index].id === id)
        return true;
    }
  }
}
