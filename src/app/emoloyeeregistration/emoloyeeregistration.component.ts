import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emoloyeeregistration',
  templateUrl: './emoloyeeregistration.component.html',
  styleUrls: ['./emoloyeeregistration.component.css']
})
export class EmoloyeeregistrationComponent implements OnInit {
  public name:string="";
  public age:number=0;
  public company:string="";
  public package: number=0;
  public percentage:number=0;

  public employees:any =[
    {name:'',age:'',company:'',package:'',percentage:''},
    {name:'',age:'',company:'',package:'',percentage:''}

  ]


  constructor() { }

  ngOnInit(): void {

  }

  register(){
    let employee={
      name:this.name,
      age:this.age,
      company:this.company,
      package:this.package,
      percentage:this.percentage
      
    }
    this.employees.push(employee);
    this.name="";
    this.age=0;
    this.company="";
    this.package=0;
    this.percentage=0;
    
    alert("registerd succesfully!!!")
  }
  delete(i:number){
    this.employees.splice(i,1);
  }

}
