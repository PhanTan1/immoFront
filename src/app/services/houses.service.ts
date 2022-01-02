import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  URL : string = "http://localhost:8080/houses";

  constructor(private http: HttpClient) { }

  getHouses() : Observable<House[]> {
    return this.http.get<House[]>(this.URL);
  }
}
