import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'nk-occupation-details',
  templateUrl: './occupation-details.component.html',
  styleUrls: ['./occupation-details.component.css']
})
export class OccupationDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}

  occupationId;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.occupationId = params['id'];
      console.log(this.occupationId);
    });
  }

}
