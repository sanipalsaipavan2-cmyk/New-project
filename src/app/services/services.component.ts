import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private ser:ApiService){}

  public products:any=""

  ngOnInit(): void {

    this.ser.getdata().subscribe((data:any)=>{
      this.products=data
      console.log(data);
      
    })


    
  }



}
