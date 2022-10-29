import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  public mails: any=[];

  constructor(private _mailservice:MailService) {
    this._mailservice.getMails().subscribe(
      (data:any)=>{
        this.mails = data;
      },
      (er:any)=>{
        alert('Internal server error');
      }
    )
   }

  ngOnInit(): void {
  }

}
