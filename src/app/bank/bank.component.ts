import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  public accounts:any=[];
  public term:string = "";

  constructor(private _BankService:BankService) { 

    this._BankService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )

  }
  ngOnInit(): void {
  }
    filter(){
     this._BankService.getfilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts= data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
     )
    }
    pagination(page:number){
      this._BankService.getPagedAccounts(page).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
      )
    }
}
