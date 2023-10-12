import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  states: any;
  latitude: any;
  longitude: any;
  weather: any;
  name: any;
  temprature: any;
  description: any;

  constructor(
    private _commonService: CommonService,
  ) {

  }

  ngOnInit(): void {
    this.states = this._commonService.constants.states;
  }

  getCity(event: any) {
    if (event.detail.value) {
      this._commonService.getCityApi(event.detail.value).subscribe((res: any) => {
        if(res[0]){
          console.log(res);
          this.latitude = res[0].lat;
          this.longitude = res[0].lon;
        } else {
          alert('City name Not found!! Please enter correct name')
        }
      })
    } else {
      alert('Please enter city name')
    }
  }

  // getState(event:any) {
  //   console.log(event);
  // }

  searchWeather() {

    const data = {
      lat: this.latitude,
      lon: this.longitude
    }
    this._commonService.getWeatherApi(data).subscribe((res: any) => {
      res.main.temp_min = Math.floor(res.main.temp_min - 273.15);
      res.main.temp_max = Math.floor(res.main.temp_max - 273.15);

      // for forcast, because i dont have any api for this.
      for (let i = 0; i < 5; i++) {
        this._commonService.weather[i] = res; 
      }

      this.name = res.name;
      this.temprature = Math.floor(res.main.temp - 273.15);
      this.description = res.weather[0].description
      console.log(this._commonService.weather);
    })
  }


}
