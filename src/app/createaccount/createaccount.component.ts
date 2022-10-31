import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  public accountForm: FormGroup = new FormGroup(
    {
      createdAt: new FormControl(),
      account_name: new FormControl(),
      available_balance: new FormControl(),
      currency: new FormControl(),
      user_image: new FormControl(),
      account_number:new FormControl(),
    }
  )

  constructor(private _bankService:BankService) { }

  ngOnInit(): void {
  }

  submit() {
    this._bankService.CreateAccount(this.accountForm.value).subscribe(
      (data: any) => {
        alert("created succefully");
      },
      (err: any) => {
        alert("Internal server error");
      }

    )
  }
}
