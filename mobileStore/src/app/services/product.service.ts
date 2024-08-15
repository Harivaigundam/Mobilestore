import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Iuser } from "../models/user.model";
import { Observable } from "rxjs";
import { IProduct } from "../models/product.model";

@Injectable({
    providedIn:"root"
})
export class ProductService{

    constructor(private http:HttpClient){}

    url:string='https://mobilestore-ca397-default-rtdb.firebaseio.com/'

    onpostProduct(data:IProduct):Observable<any>{
        return this.http.post(this.url+'product.json',data);
    }

    ongetProduct():Observable<{ [key: string]: IProduct }>{
        return this.http.get<{ [key: string]: IProduct }>(this.url+'product.json');
    }
}