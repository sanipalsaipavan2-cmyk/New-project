import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {


  public parentData:any=""
parentData1: any;

childData1:any=""

recieveData(e:any){

  this.childData1=e

}


  
}
