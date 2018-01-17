import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'nk-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private user: UsersService) { }

  data;

  ngOnInit() {
    this.user.currentUser.subscribe(response => {
      this.data = response["favourites"];
    })
  }

}
