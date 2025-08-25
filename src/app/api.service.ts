import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apihttp:HttpClient) { }

  getdata(){
   return this.apihttp.get("https://fakestoreapi.com/products")
  }

   getdata1(id:any){
   return this.apihttp.get("https://fakestoreapi.com/products/"+id)
  }

  postdata(a:any){
    return this.apihttp.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",a)
  }

  postdatadisplay(){
    return this.apihttp.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction")
  }

  delete(id:number){
    return this.apihttp.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id)
  }
}
