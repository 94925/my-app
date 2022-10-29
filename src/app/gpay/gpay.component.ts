import { Component, OnInit } from '@angular/core';
import { SbiService } from '../sbi.service';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.css']
})
export class GpayComponent implements OnInit {
  public amount:number=0;

  constructor(private _sbiService:SbiService) { }

  ngOnInit(): void {
  }
  withdraw(){
       this._sbiService.withdraw(this.amount)


  }
  deposit(){
    this._sbiService.deposit(this.amount)

  }
  balance(){
    alert( this._sbiService.getBalance());


  }

}
