import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constants: any;
  weather: any;
  constructor(
    private _http:HttpClient
  ) { 
    this.weather=[];
    this.constants= {
      states:[
        {
        "key": "AN",
        "name": "Andaman and Nicobar Islands"
        },
        {
        "key": "AP",
        "name": "Andhra Pradesh"
        },
        {
        "key": "AR",
        "name": "Arunachal Pradesh"
        },
        {
        "key": "AS",
        "name": "Assam"
        },
        {
        "key": "BR",
        "name": "Bihar"
        },
        {
        "key": "CG",
        "name": "Chandigarh"
        },
        {
        "key": "CH",
        "name": "Chhattisgarh"
        },
        {
        "key": "DH",
        "name": "Dadra and Nagar Haveli"
        },
        {
        "key": "DD",
        "name": "Daman and Diu"
        },
        {
        "key": "DL",
        "name": "Delhi"
        },
        {
        "key": "GA",
        "name": "Goa"
        },
        {
        "key": "GJ",
        "name": "Gujarat"
        },
        {
        "key": "HR",
        "name": "Haryana"
        },
        {
        "key": "HP",
        "name": "Himachal Pradesh"
        },
        {
        "key": "JK",
        "name": "Jammu and Kashmir"
        },
        {
        "key": "JH",
        "name": "Jharkhand"
        },
        {
        "key": "KA",
        "name": "Karnataka"
        },
        {
        "key": "KL",
        "name": "Kerala"
        },
        {
        "key": "LD",
        "name": "Lakshadweep"
        },
        {
        "key": "MP",
        "name": "Madhya Pradesh"
        },
        {
        "key": "MH",
        "name": "Maharashtra"
        },
        {
        "key": "MN",
        "name": "Manipur"
        },
        {
        "key": "ML",
        "name": "Meghalaya"
        },
        {
        "key": "MZ",
        "name": "Mizoram"
        },
        {
        "key": "NL",
        "name": "Nagaland"
        },
        {
        "key": "OR",
        "name": "Odisha"
        },
        {
        "key": "PY",
        "name": "Puducherry"
        },
        {
        "key": "PB",
        "name": "Punjab"
        },
        {
        "key": "RJ",
        "name": "Rajasthan"
        },
        {
        "key": "SK",
        "name": "Sikkim"
        },
        {
        "key": "TN",
        "name": "Tamil Nadu"
        },
        {
        "key": "TS",
        "name": "Telangana"
        },
        {
        "key": "TR",
        "name": "Tripura"
        },
        {
        "key": "UK",
        "name": "Uttar Pradesh"
        },
        {
        "key": "UP",
        "name": "Uttarakhand"
        },
        {
        "key": "WB",
        "name": "West Bengal"
        }
        ] 

    }
    


  }
  

  getCityApi = (cityName:any):Observable<any> =>{
    return this._http.get<any>(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${environment.apiKey}`)
  }

  getWeatherApi = (data:any):Observable<any> =>{
    return this._http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${environment.apiKey}`)
  }
  
}


