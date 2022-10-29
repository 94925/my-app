import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  public side:number=0;
  public result:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  square(){
    this.result=this.side*this.side
  }
  cube(){
    this.result=this.side*this.side*this.side

  }

}
