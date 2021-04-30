import { Component, OnInit } from '@angular/core';
import {HttpService} from 'src/app/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:HttpService) { }

  ProductList:any=[];

  ngOnInit(): void {
    this.refreshProdList();
  }
  refreshProdList(){
    this.service.getProdList().subscribe(data=>{
    this.ProductList=data;
    });
  }

  Details = true;

  showDetails(){
    this.Details = !this.Details;
  }


  // fnAddToCart(id: any) {
  //   // if (id == )
  //   for (let ac of this.addToCart) {
  //     if (ac.id == id) {
  //       ac.quantity = ac.quantity + 1;
  //       return;
  //     }
  //   }
  //   for (let dt of this.dumplingsType) {
  //     if (id == dt.id) {
  //       this.addToCart.push({ id: dt.id, itemName: dt.title, quantity: 1 });
  //     }
  //   }
  //   console.log(this.addToCart);
  // }
}
