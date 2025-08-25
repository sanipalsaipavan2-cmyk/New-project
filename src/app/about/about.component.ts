import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{


  cols:any=""

  constructor(private ser:ApiService){}
  ngOnInit(): void {

    this.postdisplaydata()
}

postdisplaydata(){

  this.ser.postdatadisplay().subscribe((data:any)=>{

      this.cols=data})
    }

    delete(id:any){

      this.ser.delete(id).subscribe((data:any)=>{
      
         this.postdisplaydata()
 })
    }

}
