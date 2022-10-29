import { Interpolation } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmoloyeeregistrationComponent } from './emoloyeeregistration/emoloyeeregistration.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { GpayComponent } from './gpay/gpay.component';
import { HooksComponent } from './hooks/hooks.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { PostComponent } from './post/post.component';
import { PowerComponent } from './power/power.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { StarComponent } from './star/star.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:'calculator',component: CalculatorComponent},
    {path:'interpolation',component: InterpolationComponent},
    {path:'event-binding',component: EventbindingComponent},
    {path:'two-way-binding',component: TwowaybindingComponent},
    {path: 'rectangle',component:RectangleComponent},
    {path: 'square',component:SquareComponent},
    {path: 'power',component:PowerComponent},
    {path: 'eventregistration',component:EventregistrationComponent},
    {path: 'employeeregistration',component:EmoloyeeregistrationComponent},
    {path: 'cart',component:CartComponent},
    {path: 'pipes',component:PipesComponent},
    {path: 'cars',component:CarsComponent},
    {path: 'star',component:StarComponent},
    {path: 'gpay',component:GpayComponent},
    {path: 'bank',component:BankComponent},
    {path: 'hooks',component:HooksComponent},
    {path: 'vehicle',component:VehicleComponent},
    {path: 'post',component:PostComponent},
    {path: 'mail',component:MailComponent},
    {path: 'vehicle-details/:id',component:VehicleDetailsComponent},
    {path: 'create-vehicle',component:CreateVehicleComponent,canDeactivate:[NotifyGuard]}
    
    
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
