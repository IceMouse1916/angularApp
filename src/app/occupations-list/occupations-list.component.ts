import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nk-occupations-list',
  templateUrl: './occupations-list.component.html',
  styleUrls: ['./occupations-list.component.css']
})
export class OccupationsListComponent implements OnInit {

  @Input()
  nkDataToRender:String;

  constructor() { }

  ngOnInit() {
  }

}
