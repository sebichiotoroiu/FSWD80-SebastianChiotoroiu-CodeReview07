import { Component, OnInit } from '@angular/core';
import { TravelService } from "../shared/travel.service";

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  constructor(public travelService: TravelService) { }
  submitted: boolean;
  formControls = this.travelService.form.controls;
  showSuccessMessage: boolean;

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    if(this.travelService.form.valid){
      if(this.travelService.form.get("$key").value == null){

        this.travelService.insertTravel(this.travelService.form.value);
      this.showSuccessMessage =true;// we set the property to true
       setTimeout(()=> this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
       this.submitted = false;
       this.travelService.form.reset();

      } else {

        this.travelService.updateTravel(this.travelService.form.value);
        this.showSuccessMessage = true;
        setTimeout(()=> this.showSuccessMessage=false, 2500);

        this.submitted = false;
        this.travelService.form.reset();
      }
      }
    }
}
