import { Component, OnInit } from '@angular/core';
import { TravelService } from "../shared/travel.service";

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {
  travelArray=[];
  showDeletedMessage: boolean;
  searchText: string = "";

  constructor(public travelService: TravelService) { }

  ngOnInit() {
  	this.travelService.getTravel().subscribe(
  		(list) => {
  			this.travelArray = list.map((item) =>{
  				return{
  					$key : item.key,
  					...item.payload.val()
  				}
  			})
  		});
  }

  onDelete($key){
    if(confirm("Are you sure you want to delete this record?")){
      this.travelService.deleteTravel($key);
      this.showDeletedMessage = true;
      setTimeout(()=> this.showDeletedMessage=false, 2500)
    }
  }

  filterCondition(travel){
    return travel.country.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
    travel.city.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
    travel.description.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
    travel.duration.indexOf(this.searchText) != -1 ||
    travel.price.indexOf(this.searchText) != -1;
  }

}
