import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  public vehicles:any =[];
  public term:string="";
  public column:string ="";
  public order:string ="";

  constructor( private _vehicleservice:VehicleService,private router:Router) { 

  this._vehicleservice.getVehicles().subscribe(
    (data:any) => {
      this.vehicles = data;
    },
    (err:any) => {
      alert('Internal server error');
    }
  )
  }

  ngOnInit(): void {
  }

  filter(){
    this._vehicleservice.getFilteredVehicles(this.term).subscribe (
    (data:any)=>{
      this.vehicles = data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
    )
  }
  pagination(page:number){
    this._vehicleservice.getPagedVehicles(page).subscribe(
    (data:any)=>{
      this.vehicles = data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
    )
  }
  sort(){
    this._vehicleservice.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
       (err:any)=>{
        alert("Internal server error");
       }
    )
  }
  delete(id:string){
    this._vehicleservice.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("deleted succefully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("Internaal server error");
      }
    )
  }
  view(id:string){
this.router.navigateByUrl('/dashboard/vehicle-details/'+id);
  }
  }

