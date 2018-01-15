import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class OccupationsService {

  constructor( private http: HttpClient ) { }

  getChosenOccupations(value) {
    return this.http.get('http://localhost:3000/occupations' + value); 
    }

  getOccupationById(id){
    return this.http.get('http://localhost:3000/occupations?id=' + id); 
  }
}
