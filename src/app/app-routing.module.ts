import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelComponent } from './travel/travel.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { SpecialOffersComponent } from './specialoffers/specialoffers.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{
	path:"", component:TravelComponent
},
{
	path:"about", component:AboutPageComponent
},
{
	path:"destinations", component:DestinationsComponent
},
{
	path:"insurance", component:InsuranceComponent
},
{
	path:"specialoffers", component:SpecialOffersComponent
},
{
	path:"contact", component:ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }