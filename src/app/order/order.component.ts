import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  productArr:any = []

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
}
