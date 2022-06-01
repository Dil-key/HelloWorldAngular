import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todayDate;

  public personData: any[] = [];

  constructor(private myservice: MyServiceService) { }

  ngOnInit() {
    this.todayDate = this.myservice.showTodayDate();

    this.myservice.getData().subscribe((data) => {
      // this.personData = Array.from(Object.keys(data),k=>data[k])
      this.personData = Array.from(Object.keys(data), k => data[k]);
      console.log(this.personData);

    });
  }

  title = 'Welcome to Angular';
  description = "Welcome to our First Angular Project. Start building your project with most popular javascript framework";

  months = ["---Select Month---", "January", "February", "March", "April", "May", "June", "July", "Auhust", "September", "October", "November", "December"];

  isAvailable = false;

  simplePipeData = "This is going really well";

  setTrue() {
    console.log("Now Set Value to TRUE");

  }

  setFalse() {
    console.log("Now Set Value to FALSE");

  }

  firstFeature = {
    heading: "Feature One",
    body: "Some feature details for the First Feature"
  }

  secondFeature = {
    heading: "Feature Second",
    body: "Some feature details for the Second Feature"
  }

  thirdFeature = {
    heading: "Feature Third",
    body: "Some feature details for the Third Feature"
  }

  fourthFeature = {
    heading: "Feature Fourth",
    body: "Some feature details for the Fourth Feature"
  }
}
