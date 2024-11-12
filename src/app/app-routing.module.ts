import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddVehiclesComponent } from './components/add-vehicles/add-vehicles.component';
import { ManageVehiclesComponent } from './components/manage-vehicles/manage-vehicles.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { BookingComponent } from './components/booking/booking.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ViewVehichlesComponent } from './components/view-vehichles/view-vehichles.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { CarsComponent } from './components/cars/cars.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: "admin", component: AdminDashboardComponent,
    children: [
      { path: "add", component: AddVehiclesComponent },
      { path: "manage", component: ManageVehiclesComponent },
      { path: "view", component: ViewOrdersComponent }
    ]

  },

  {
    path: "user", component: UserDashboardComponent,
    children: [
      { path: "bikes", component: BikesComponent },
      { path: "cars", component: CarsComponent },
      { path: "booking", component: BookingComponent },
      { path: "wishlist", component: WishlistComponent },
      { path: "orders", component: ViewOrdersComponent },
      { path: "view", component: ViewVehichlesComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
