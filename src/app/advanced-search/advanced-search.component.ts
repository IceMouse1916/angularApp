import { Component, OnInit } from '@angular/core';
import { OccupationsService } from '../occupations.service';

@Component({
  selector: 'nk-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  constructor(private occupationsService: OccupationsService) { }

  
  nkStressLevel;
  nkSalary;
  nkEducation;

  occupations;

  ngOnInit() {
    // default form values
    this.nkEducation = 1;
    this.nkSalary = 1000;
    this.nkStressLevel = 5;
  }

  searchWithParameters(salary, stress, education){
    this.occupationsService.getOccupationsWithParameters(salary, stress, education).subscribe( occupations => {
      this.occupations = occupations;
    })
  }
}
