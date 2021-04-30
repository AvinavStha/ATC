import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

  getProdList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl + '/product/');
  }

  addProduct(val:any){
      return this.http.post(this.APIUrl + '/product',val);
  }

  updateProduct(val:any){
      return this.http.put(this.APIUrl + '/product',val);
  }

  deleteProduct(val:any){
      return this.http.delete(this.APIUrl + '/product'+val);
  }

  getItList():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl + '/item/');
  }

  addItem(val:any){
      return this.http.post(this.APIUrl + '/item',val);
  }

  updateItem(val:any){
      return this.http.put(this.APIUrl + '/item',val);
  }

  deleteItem(val:any){
      return this.http.delete(this.APIUrl + '/item'+val);
  }


  UploadPhoto(val:any){
      return this.http.post(this.APIUrl + '/SaveFile',val);
  }

  getAllProductNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl + '/product/');

  }
}
