import { Component } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent {

  useremail:any=""
  userpassword:any=""

  public ref1:any=""

  submit(ref:any){

    this.ref1=ref
    console.log(this.ref1.value);
    

}

}
