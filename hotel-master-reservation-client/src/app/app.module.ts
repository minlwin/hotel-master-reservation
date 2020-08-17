import { AccountFilter } from './views/account/accout-filter.pipe';
import { AccountComponent } from './views/account/account.component';
import { AuthInterceptor } from './model/service/auth-interceptor.service';
import { RoomTypeFormComponent } from './views/hotel/hotel-detail/room-type/room-type-form/room-type-form.component';
import { RoomFormComponent } from './views/hotel/building/floor/room/room-form/room-form.component';
import { FloorComponent } from './views/hotel/building/floor/floor.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './views/hotel/hotel.component';
import { HotelFormComponent } from './views/hotel/hotel-form/hotel-form.component';
import { HotelDetailComponent } from './views/hotel/hotel-detail/hotel-detail.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { SignInComponent } from './views/account/sign-in/sign-in.component';
import { SignUpComponent } from './views/account/sign-up/sign-up.component';
import { BuildingComponent } from './views/hotel/building/building.component';
import { BuildingFormComponent } from './views/hotel/building/building-form/building-form.component';
import { RoomComponent } from './views/hotel/building/floor/room/room.component';
import { RoomTypeComponent } from './views/hotel/hotel-detail/room-type/room-type.component';
import { RoomTypeDetailComponent } from './views/hotel/hotel-detail/room-type/room-type-detail/room-type-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    HotelComponent,
    HotelFormComponent,
    HotelDetailComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    BuildingComponent,
    BuildingFormComponent,
    FloorComponent,
    RoomComponent,
    RoomFormComponent,
    RoomTypeComponent,
    RoomTypeFormComponent,
    RoomTypeDetailComponent,
    AccountFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
