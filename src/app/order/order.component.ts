import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemSerService } from './item-ser.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  totalPrice : any = "" 
  userName = ""
  code = ""
  selectedUser = ""
  totalAmt : number = 0
  productList:any = []
  // order :any = {
    itemName = ""
    qty = ""
    balQty = ""
    pack = ""
    scheme = ""
    mrp = ""
    rate = ""
  // }
  isClicked = false;
  isReadOnly = true;
  isQty = false;
  checkAll = false;
  selectedItemObj : any = {}
  selectedItems : any = []
  responseMsg : any = []
  totalAmount = []
  selectedItemArr : any = []

  config = {
    displayKey:"name", //if objects array passed which key to be displayed defaults to description
    search:true, //true/false for the search functionlity defaults to false,
    placeholder:'Select', // text to be displayed when no item is selected defaults to Select,
    height: '200px'
  }
  constructor(
    private _prodService: ItemSerService,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedUser = this._activeRoute.snapshot.queryParamMap.get("custName")
    this.getAllProducts();
    this._getSelectedItemList(this.selectedUser)
  }

  getAllProducts(){
    this._prodService.getAllItems().subscribe(
      res => {
        this.productList = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  selectionChanged(data:any){
    this.productList.filter(ele=>{
      if(data.value.name.toLowerCase() == ele.name.toLowerCase()){
        this.code = data.value.code
        this.itemName = data.value.name
        this.balQty = ele.clQty
        this.mrp = ele.mrp
        this.pack = ele.pack
        this.rate = ele.rate
        this.scheme = ele.scheme
      }
    })
  }
  msg = ""
  checkQty(qty){
    if(qty == 0){
      this.isQty = true
      this.checkAll = true
      this.msg = "Quantity cannot be 0"
    } else if(parseInt(qty) > parseInt(this.balQty)) {
      this.isQty = true;
      this.checkAll = true;
      this.msg = "Quantity cannot be greater than Balance Quantity"
    } else {
      this.isQty = false
      this.checkAll = false
    }
    if(this.isQty === false){
      this.checkAll = false
    }
  }

  createOrder(){
    this.totalPrice =parseInt(this.qty) * parseInt(this.rate) 
    this.totalPrice = String(this.totalPrice)
    this.userName = this.selectedUser 
    this.qty = String(this.qty)

    this._prodService.selectItem(this.code,this.itemName,this.userName ,this.qty, this.pack,this.rate,this.mrp,this.totalPrice)
      .subscribe(
        res=>{
          this.reset();
          this._getSelectedItemList(this.userName)
        },
        err=>{
          console.log(err)
        }
      )
  }
  
  _getSelectedItemList(userName){
    this._prodService.getSelectedItemList(userName)
      .subscribe(
        res=> {
          this.selectedItems = res
          this.selectedItemArr = this.selectedItems
          this.selectedItemArr.forEach(ele=>{
            this.totalAmount.push(parseInt(ele.totalPrice))
          })
          let acc = this.totalAmount.reduce((acc,el)=>{
            acc += el
            return acc
          })
          this.totalAmt = acc
          this.totalAmount = []
        },
        err=>{
          console.log(err)
        })
          

          // this.selectedItems = this.selectedItemObj.storeSelectedItemsResult
        
  }
  reset(){
    // this.order = {
      this.itemName = ""
      this.qty = ""
      this.balQty = ""
      this.pack = "" 
      this.scheme = ""
      this.mrp = ""
      this.rate = ""
    // }
  }
  editRow(){
    this.isClicked = true
    this.isReadOnly = false;

  }
  cancelEdit(){
    this.isClicked = false;
    this.isReadOnly = true;
  }
  deleteItem(_code){
    if(confirm("Are You Sure ?"+_code)){
      this._prodService.deleteSelectedItem(_code).subscribe(
        res=>{
          this.responseMsg = res;
          this._getSelectedItemList(this.selectedUser);
          console.log(this.responseMsg)
        }
      )
    }
  }
}
