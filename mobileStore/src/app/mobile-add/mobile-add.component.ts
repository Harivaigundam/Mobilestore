import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-mobile-add',
  templateUrl: './mobile-add.component.html',
  styleUrl: './mobile-add.component.css'
})
export class MobileAddComponent implements OnInit {

  form!:FormGroup;

  details!:IProduct

  constructor(private productservice:ProductService){}

  ngOnInit(){

    this.initform();
  }

  initform(){
    this.form=new FormGroup({
      productName:new FormControl(null,Validators.required),
      productImage:new FormControl(null,Validators.required),
      productPrice:new FormControl(null,Validators.required)
    });
  }

  onSubmit(){
    this.details=this.form.value;
    console.log(this.details);
    this.productservice.onpostProduct(this.details).subscribe(res =>{
      console.log(res);
    });
    this.form.reset();
  }
}
