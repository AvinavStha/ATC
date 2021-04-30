import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { countryName } from '../types/api';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiCountry = 'https://restcountries.eu/rest/v2/'; 
  public countriesArr: Array<any> = [];

  constructor(private http: HttpClient) { }

  getAllCountriesName(callback = (err: any= null, resp: any = {}) => {}, options = {}){
    this.http.get<any>(this.apiCountry).subscribe(resp => {
     
      callback(null, resp);
    }, error => {
      callback(error);
    });
  }

}
