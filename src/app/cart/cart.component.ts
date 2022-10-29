import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public name:string="";
  public product:string="";
  public quantity:number=0;
  public price:number=0;

  public carts:any =[
    {name:'',product:'',quantity:'',price:''},
    {name:'',product:'',quantity:'',price:''},
 ]


  constructor() { }

  ngOnInit(): void {
  }
  addtocart(){
    let cart={
      name:this.name,
      product:this.product,
      quantity:this.quantity,
      price:this.price
    }
    this.carts.push( cart );
    this.name="";
    this.product="";
    this.quantity=0;
    this.price=0;
    alert("registerd succesfully!!!")
  }
  delete(i:number){
    this.carts.splice(i,1);
  }

}
