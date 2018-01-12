import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class OccupationsService {

  constructor( private http: HttpClient ) { }


  getOccupations() {
  return this.http.get('http://localhost:3000/occupations'); 
  }
}
