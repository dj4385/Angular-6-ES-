import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  productArr:any = []
  order = {
    itemName: "",
    qty:"",
    balQty:"",
    pack:"",
    scheme:"",
    mrp:"",
    rate:""
  }
  isClicked = false;
  isReadOnly = true;
  constructor(
    private _prodService: ProductsService
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this._prodService.getProducts().subscribe(
      res => {
        this.productArr = res;
        alert("All products details gets");
      },
      err => {
        console.log(err);
      }
    )
  }

  createOrder(){
    console.log(this.order);
  }
  reset(){
    this.order = {
      itemName: "",
      qty:"",
      balQty:"",
      pack:"",
      scheme:"",
      mrp:"",
      rate:""
    }
  }
  editRow(){
    this.isClicked = true
    this.isReadOnly = false;

  }
  cancelEdit(){
    this.isClicked = false;
    this.isReadOnly = true;
  }
}
