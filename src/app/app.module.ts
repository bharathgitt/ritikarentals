import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { BookingComponent } from './components/booking/booking.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { ViewVehichlesComponent } from './components/view-vehichles/view-vehichles.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddVehiclesComponent } from './components/add-vehicles/add-vehicles.component';
import { ManageVehiclesComponent } from './components/manage-vehicles/manage-vehicles.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    BookingComponent,
    WishlistComponent,
    ViewOrdersComponent,
    ViewVehichlesComponent,
    AdminDashboardComponent,
    AddVehiclesComponent,
    ManageVehiclesComponent,
    LoginComponent,
    CarsComponent,
    BikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
