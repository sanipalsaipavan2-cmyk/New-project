import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { find } from 'rxjs';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{

  

  getid:any=""
  products:any=""

  constructor(private act:ActivatedRoute , private ser:ApiService){}

ngOnInit(): void {

//  this.getid =this.act.snapshot.paramMap.get("id")


this.act.paramMap.subscribe(params=>{
  this.getid=Number(params.get ('id'))
})

this.ser.getdata1(this.getid).subscribe((data:any)=>{
  this.products=data
})
 
 
 
 
 
// //  this.ser.getdata().subscribe((data:any)=>{
// //   this.products=data.find((a:any)=> a.id==this.getid)

// //   console.log(this.getid);
  
//  })



    
  }

  

  



}
