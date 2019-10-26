import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(public firebase: AngularFireDatabase) { }
  travelList: AngularFireList<any>;

  form = new FormGroup({
     $key: new FormControl(null),
     country: new FormControl('', Validators.required),
     city: new FormControl('', Validators.required),
     description: new FormControl('', Validators.required),
     duration: new FormControl('',[Validators.required,Validators.minLength(1)]),
     price: new FormControl('',Validators.required),
     img: new FormControl('', Validators.required)
         });

  getTravel(){
    this.travelList = this.firebase.list('Travel');
    return this.travelList.snapshotChanges();
  }

  insertTravel(travel){
    this.travelList.push({
      country: travel.country,
       city: travel.city,
       description: travel.description,
       duration: travel.duration,
       price: travel.price,
       img: travel.img
    });
  }

  populateForm(travel){
    this.form.setValue(travel);
  }

  updateTravel(travel){
    this.travelList.update(travel.$key,{
      country: travel.country,
      city: travel.city,
      description: travel.description,
      duration: travel.duration,
      price: travel.price,
      img: travel.img
    });
  }

  deleteTravel($key: string){
    this.travelList.remove($key);
  }
}
