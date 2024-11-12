import { Injectable } from '@angular/core';
import { vehicles } from './vehicle';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  vehicle:vehicles[] = [
    {
    vehicleId:1,
    vehicleName:"Continental GT 650",
    vehicleCompany:"Royal Enfield",
    vehiclePrice:450000,
    vehicleTime:null,
    fuelType:null,
    seatingCapacity:null,
    vehicleType:"bike",
    vehicleImage:"https://i.pinimg.com/736x/97/96/b1/9796b179bf4b9a70d160c8944d6278bf.jpg",
    rating:4.5
    },
    {
      vehicleId:2,
      vehicleName:"Karishma ZMR",
      vehicleCompany:"Yamaha",
      vehiclePrice:150000,
      vehicleTime:null,
      fuelType:null,
      seatingCapacity:null,
      vehicleType:"bike",
      vehicleImage:"https://www.sagmart.com/uploads/2016/01/05/product_1/hero-karizma-zmr-standard.jpg",
      rating:4.7
      },
      

]

getAllvehicles()
  {
    return of(this.vehicle);
  }

  addvehicels(newvehicle:any)
  {
    this.vehicle.push(newvehicle);
    return "added";
  }
  getVehicleById(id:any)
  {
    return this.vehicle.find(vehicle=>vehicle.vehicleId==id);
  }

  deletevehicle(id:any)
  {
    let index=this.vehicle.findIndex(vehicle=>vehicle.vehicleId==id);
  }

  getBikes()
  {
    return of(this.vehicle.filter(vehicle=>vehicle.vehicleType=="Bike"))
  }

  getCars()
  {
    return of(this.vehicle.filter(vehicle=>vehicle.vehicleType=="Car"))
  }

  updatevehicle(id:any,newvehicle:any)
  {
    let index=this.vehicle.findIndex(vehicle=>vehicle.vehicleId==id)
    this.vehicle.splice(index,1,newvehicle);
  }


  constructor() { }
}
