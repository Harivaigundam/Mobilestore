import { Component } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-mobile-show',
  templateUrl: './mobile-show.component.html',
  styleUrl: './mobile-show.component.css'
})
export class MobileShowComponent {

  mobilelist:IProduct[]=[
    
  ];

  constructor(private product:ProductService){
    
  }

  ngOnInit(){
    this.product.ongetProduct().subscribe((res:{ [key: string]: IProduct })=>{
      console.log(res);
      for(const key in res){
     if(res.hasOwnProperty(key)){
      const product = res[key];
      this.mobilelist.push({
        productName:product.productName,
        productImage:product.productImage,
        productPrice:product.productPrice
      })
     }

    }
      console.log('mob:',this.mobilelist);
     })

  }

}
