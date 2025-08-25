import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {


  ngOnChanges(changes: SimpleChanges): void {
    
    console.log(changes);
    
  }
  @Input() parentData1:any

  public childData:any="i am child data"

  @Output() ent=new EventEmitter<any>()

  sendData(){
    this.ent.emit(this.childData)
  }


}
