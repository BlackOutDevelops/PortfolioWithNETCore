import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'hobbies',
  templateUrl: 'hobbies.component.html',
  styleUrls: ['hobbies.component.css']
})
export class HobbiesComponent {
  houseOneBeforeImageLocations = this.dataService.houseOneBeforeImageLocations;
  houseOneAfterImageLocations = this.dataService.houseOneAfterImageLocations;
  houseTwoBeforeImageLocations = this.dataService.houseTwoBeforeImageLocations;
  houseTwoAfterImageLocations = this.dataService.houseTwoAfterImageLocations;

  constructor(private dataService: DataService) { }
}
