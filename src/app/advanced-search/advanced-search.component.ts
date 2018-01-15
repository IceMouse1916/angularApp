import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nk-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  constructor() { }

  // default form values
  nkStressLevel = 5;
  nkSalary = 1000;
  nkEducation = 1;

  ngOnInit() {
  }

}
