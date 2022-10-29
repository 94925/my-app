import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name:string = "hello it's me";
  public city:string = "RJY";
  public dob:string = "05-21-1996";
  public today:Date=new Date();

  public user:any={name:'abc',phone:8712};

  constructor() { }

  ngOnInit(): void {
  }

}
