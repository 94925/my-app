import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  public accounts:any=[];
  public term:string = "";
  public column:string="";
  public order:string="";

  constructor(private _BankService:BankService,private router:Router) { 

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
    sort(){
      this._BankService.getSortedAccounts(this.column,this.order).subscribe(
        (data:any)=>{
          this.accounts=data;
        },
        (err:any)=>{
          alert("Internal server error")
        }
      )
    }
    delete(id:string){
      this._BankService.deleteAccount(id).subscribe(
        (data:any)=>{
          alert("deleted succesfully!!!");
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
    view(id:string){
      this.router.navigateByUrl('/dashboard/bank-details/'+id);
    }

}
