import { BuildingComponent } from './views/hotel/building/building.component';
import { HotelManagementComponent } from './views/hotel-management/hotel-management.component';
import { SignUpComponent } from './views/account/sign-up/sign-up.component';
import { SignInComponent } from './views/account/sign-in/sign-in.component';
import { HotelDetailComponent } from './views/hotel/hotel-detail/hotel-detail.component';
import { HotelComponent } from './views/hotel/hotel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelFormComponent } from './views/hotel/hotel-form/hotel-form.component';
import { RoomDetailComponent } from './views/room/room-detail/room-detail.component';
import { BuildingFormComponent } from './views/hotel/building/building-form/building-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/hotel', pathMatch: 'full' },
  { path: 'hotel', component: HotelComponent },
  {
    path: 'hotel-management', component: HotelManagementComponent, children: [
      {path: 'building', component: BuildingComponent},
      {path: 'building/new', component: BuildingFormComponent}
    ]
  },
  { path: 'hotel/create', component: HotelFormComponent },
  { path: 'hotel/:id', component: HotelDetailComponent },
  { path: 'hotel/:id/edit', component: HotelFormComponent },
  { path: 'hotel-detail', component: HotelDetailComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'room-detail', component: RoomDetailComponent },
  { path: '**', redirectTo: '/hotel', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
