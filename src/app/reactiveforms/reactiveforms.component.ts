import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {

  constructor(private ser:ApiService  ,private rou:Router){}

  login=new FormGroup({
    Vehicle:new FormControl("",[Validators.required,Validators.email]),
    manufacturer:new FormControl("",[Validators.required,Validators.minLength(8)])
  })
uemail: any;

  submit(){

    this.ser.postdata(this.login.value).subscribe((data:any)=>{

      this.rou.navigate(["/About"])

    })





    console.log(this.login.value);
    
  }


}
