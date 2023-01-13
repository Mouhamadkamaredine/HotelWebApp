import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './User/user.component';
import { RegistrationComponent } from './User/registration/registration.component';
import { UserService } from './Shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './User/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavbarComponent } from './home/navbar/navbar.component';
import { AddBookingComponent } from './Booking/add-booking/add-booking.component';
import { EditBookingComponent } from './Booking/edit-booking/edit-booking.component';
import { AllBookingComponent } from './Booking/all-booking/all-booking.component';
import { AddRoomsComponent } from './Rooms/add-rooms/add-rooms.component';
import { EditRoomsComponent } from './Rooms/edit-rooms/edit-rooms.component';
import { AllRoomsComponent } from './Rooms/all-rooms/all-rooms.component';
import { AddStaffComponent } from './Staff/add-staff/add-staff.component';
import { EditStaffComponent } from './Staff/edit-staff/edit-staff.component';
import { AllStaffComponent } from './Staff/all-staff/all-staff.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { AddRoomsFormComponent } from './Rooms/add-rooms/add-rooms-form/add-rooms-form.component';
import { EditRoomsFormComponent } from './Rooms/edit-rooms/edit-rooms-form/edit-rooms-form.component';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { EditBookingFormComponent } from './Booking/edit-booking/edit-booking-form/edit-booking-form.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TestDashComponent } from './Test/test-dash/test-dash.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DataTablesModule } from 'angular-datatables';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddfacilityComponent } from './Facility/addfacility/addfacility.component';
import { AllFacilityComponent } from './Facility/all-facility/all-facility.component';
import { EdditFacilityComponent } from './Facility/eddit-facility/eddit-facility.component';
import { AddFacilityFormComponent } from './Facility/addfacility/add-facility-form/add-facility-form.component';
import { EditFacilityFormComponent } from './Facility/eddit-facility/edit-facility-form/edit-facility-form.component';
import { AddHotelInfoComponent } from './HotelInfo/add-hotel-info/add-hotel-info.component';
import { EditHotelInfoComponent } from './HotelInfo/edit-hotel-info/edit-hotel-info.component';
import { AllHotelInfoComponent } from './HotelInfo/all-hotel-info/all-hotel-info.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AddBookingComponent,
    EditBookingComponent,
    AllBookingComponent,
    AddRoomsComponent,
    EditRoomsComponent,
    AllRoomsComponent,
    AddStaffComponent,
    EditStaffComponent,
    AllStaffComponent,
    AddRoomsFormComponent,
    EditRoomsFormComponent,
    EditBookingFormComponent,
    TestDashComponent,
    NavigationComponent,
    DashboardComponent,
    AddfacilityComponent,
    AllFacilityComponent,
    EdditFacilityComponent,
    AddFacilityFormComponent,
    EditFacilityFormComponent,
    AddHotelInfoComponent,
    EditHotelInfoComponent,
    AllHotelInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({ progressBar: true }),
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    CommonModule,
    MDBBootstrapModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DataTablesModule,
    Ng2SearchPipeModule


  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
