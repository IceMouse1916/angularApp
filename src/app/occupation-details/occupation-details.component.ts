import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { OccupationsService } from '../occupations.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'nk-occupation-details',
  templateUrl: './occupation-details.component.html',
  styleUrls: ['./occupation-details.component.css']
})
export class OccupationDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private occupationService: OccupationsService, private sanitizer: DomSanitizer) { }

  occupation;
  safeUrl;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this.occupationService.getOccupationById(id).subscribe((occupation) => {
        this.occupation = occupation[0];
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.occupation.video);
      })
    });
  }


}
