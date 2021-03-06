import { Component, OnInit } from '@angular/core';
import { OccupationsService } from '../occupations.service';
import { UsersService } from '../users.service';



@Component({
  selector: 'nk-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private occupationService: OccupationsService) { }

  ngOnInit() {
  
  }
 
  occupations;
  name;
 

  downloadChosenOccupations(userWord){
    this.occupationService.getChosenOccupations('?label_like='+userWord)
                          .subscribe(response => { 
                          this.occupations = response 
                          });
  }
  

}
