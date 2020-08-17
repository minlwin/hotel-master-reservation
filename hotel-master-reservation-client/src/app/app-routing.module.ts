import { AuthGuard } from './model/common/auth-guard.service';
import { AccountComponent } from './views/account/account.component';
import { FloorComponent } from './views/hotel/building/floor/floor.component';
import { SignUpComponent } from './views/account/sign-up/sign-up.component';
import { SignInComponent } from './views/account/sign-in/sign-in.component';
import { HotelDetailComponent } from './views/hotel/hotel-detail/hotel-detail.component';
import { HotelComponent } from './views/hotel/hotel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelFormComponent } from './views/hotel/hotel-form/hotel-form.component';
import { BuildingFormComponent } from './views/hotel/building/building-form/building-form.component';
import { RoomTypeFormComponent } from './views/hotel/hotel-detail/room-type/room-type-form/room-type-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/hotel', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'account/create', component: SignUpComponent },
  { path: 'account/edit', component: SignUpComponent },
  { path: 'hotel', component: HotelComponent},
  { path: 'hotel/create', component: HotelFormComponent, canActivate: [AuthGuard] },
  { path: 'hotel/:code', component: HotelDetailComponent },
  { path: 'hotel/:id/edit', component: HotelFormComponent },
  { path: 'building', component: BuildingFormComponent, canActivate: [AuthGuard]},
  { path: 'building/:code/floor', component: FloorComponent, canActivate: [AuthGuard] },
  { path: 'room-type', component: RoomTypeFormComponent },
  { path: '**', redirectTo: '/hotel', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
