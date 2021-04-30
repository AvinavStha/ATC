import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  menuItems:Array<any>=[
    {title: 'About Us', route:'about-us'},
    {title: 'Products', route:'products'},

    //  {title: 'Product', route:'products',children:[
    //   {title: 'Nepali Liquor', route:'Nepali Liquor',children:[]},
    //   {title: 'Beer', route:'Beer',children:[]},
    //   {title: 'Puja Products', route:'Puja Products',children:[]},
    //   {title: 'Biscuits', route:'Biscuits',children:[]},
    // ]},
    {title: 'Contact Us', route:"contact-us"},
    
    // {title: 'About Us', route:"about-us"},
    // {title: 'About Us', route:"about-us"},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
