import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './views/hotel/hotel.component';
import { HotelFormComponent } from './views/hotel/hotel-form/hotel-form.component';
import { HotelDetailComponent } from './views/hotel/hotel-detail/hotel-detail.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { SignInComponent } from './views/account/sign-in/sign-in.component';
import { SignUpComponent } from './views/account/sign-up/sign-up.component';
import { BuildingFormComponent } from './views/building-form/building-form.component';
import { RoomFormComponent } from './views/room/room-form/room-form.component';
import { RoomDetailComponent } from './views/room/room-detail/room-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HotelFormComponent,
    HotelDetailComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    BuildingFormComponent,
    RoomFormComponent,
    RoomDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
