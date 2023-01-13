import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddBookingComponent } from './Booking/add-booking/add-booking.component';
import { AllBookingComponent } from './Booking/all-booking/all-booking.component';
import { EditBookingComponent } from './Booking/edit-booking/edit-booking.component';
import { AddFacilityFormComponent } from './Facility/addfacility/add-facility-form/add-facility-form.component';
import { AllFacilityComponent } from './Facility/all-facility/all-facility.component';
import { EdditFacilityComponent } from './Facility/eddit-facility/eddit-facility.component';
import { HomeComponent } from './home/home.component';
import { AddHotelInfoComponent } from './HotelInfo/add-hotel-info/add-hotel-info.component';
import { AddRoomsComponent } from './Rooms/add-rooms/add-rooms.component';
import { AllRoomsComponent } from './Rooms/all-rooms/all-rooms.component';
import { EditRoomsComponent } from './Rooms/edit-rooms/edit-rooms.component';

import { AddStaffComponent } from './Staff/add-staff/add-staff.component';
import { AllStaffComponent } from './Staff/all-staff/all-staff.component';
import { EditStaffComponent } from './Staff/edit-staff/edit-staff.component';
import { TestDashComponent } from './Test/test-dash/test-dash.component';
import { LoginComponent } from './User/login/login.component';
import { RegistrationComponent } from './User/registration/registration.component';
import { UserComponent } from './User/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent, children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: 'home', component: HomeComponent, },
  { path: 'addBooking', component: AddBookingComponent/*, canActivate: [AuthGuard] */},
  { path: 'editBooking', component: EditBookingComponent},
  { path: 'editBooking/:id', component: EditBookingComponent },
  { path: 'allBooking', component: AllBookingComponent},
  { path: 'addRooms', component: AddRoomsComponent },
  { path: 'editRooms', component: EditRoomsComponent },
  { path: 'editRooms/:id', component: EditRoomsComponent},
  { path: 'allRooms', component: AllRoomsComponent},
  { path: 'addStaff', component: AddStaffComponent, canActivate: [AuthGuard] },
  { path: 'editStaff', component: EditStaffComponent, canActivate: [AuthGuard] },
  { path: 'allStaff', component: AllStaffComponent, canActivate: [AuthGuard] },
  { path: 'profail', component: TestDashComponent, canActivate: [AuthGuard] },
  { path: 'addFacility', component: AddFacilityFormComponent, canActivate: [AuthGuard] },
  { path: 'allFacility', component: AllFacilityComponent, canActivate: [AuthGuard] },
  { path: 'editFacility', component: EdditFacilityComponent, canActivate: [AuthGuard] },
  { path: 'editFacility/:id', component: EdditFacilityComponent, canActivate: [AuthGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard] },
  { path: 'addHotelInfo', component: AddHotelInfoComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
