import { Component, OnInit } from '@angular/core';
import { OccupationsService } from '../occupations.service';

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
  
  downloadOccupations() {
    this.occupationService.getOccupations()
                          .subscribe(response => { 
                                    this.occupations = response 
                                    });
    
  }

  

}
