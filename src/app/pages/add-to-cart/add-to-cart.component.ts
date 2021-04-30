import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  addToCart:any={};
  countriesList: Array<any> = [];

  constructor(private apiService: ApiService) { }

  fnSubmitData(){
    console.log(this.addToCart);
  }
  
  ngOnInit(): void {
    this.getAllCountriesName();
  }
  getAllCountriesName(){
    this.apiService.getAllCountriesName((err, res) => {
      if(err) {
        console.log(err);
      } else {
        for(let i in res) {
          this.countriesList.push({name: res[i].name});
        }
        console.log(this.countriesList);  
      }
    });
    }
}
