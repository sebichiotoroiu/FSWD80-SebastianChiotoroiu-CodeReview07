import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { TravelComponent } from './travel/travel.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelService } from "./shared/travel.service";
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { ContactComponent } from './contact/contact.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { SpecialOffersComponent } from './specialoffers/specialoffers.component';


@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    TravelListComponent,
    NavbarComponent,
    HeroComponent,
    AboutPageComponent,
    FooterPageComponent,
    InsuranceComponent,
    ContactComponent,
    DestinationsComponent,
    SpecialOffersComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [TravelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
