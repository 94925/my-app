import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  public vehicleForm: FormGroup = new FormGroup(
    {
      createdAt: new FormControl(),
      account_name: new FormControl(),
      available_balance: new FormControl(),
      currency: new FormControl(),
      user_image: new FormControl(),
      account_number: new FormControl()
    }
  )


  constructor(private _vehicleService: VehicleService) { }

  ngOnInit(): void {
  }
  submit() {
    this._vehicleService.CreateVehicle(this.vehicleForm.value).subscribe(
      (data: any) => {
        alert("created succefully");
      },
      (err: any) => {
        alert("Internal server error");
      }

    )
  }
  }
