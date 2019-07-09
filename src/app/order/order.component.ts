import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemSerService } from './item-ser.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  selectedUser = ""
  productList:any = []
  productName: any = []
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
    private _prodService: ItemSerService,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedUser = this._activeRoute.snapshot.queryParamMap.get("custName")
    this.getAllProducts();
  }

  getAllProducts(){
    this._prodService.getAllItems().subscribe(
      res => {
        this.productList = res;
        this.productList.forEach(element => {
          this.productName.push(element.name)
        });
        console.log(this.productList)
      },
      err => {
        console.log(err);
      }
    )
  }

  itemSelected(){
    this.productList.filter(ele=>{
      if(this.order.itemName.toLowerCase() == ele.name.toLowerCase()){
        this.order.balQty = ele.clQty
        this.order.mrp = ele.mrp
        this.order.pack = ele.pack
        this.order.rate = ele.rate
        this.order.scheme = ele.scheme
      }
    })
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
