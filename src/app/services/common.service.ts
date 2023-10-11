import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private _http:HttpClient
  ) { }

  postApi = (data:any):Observable<any> =>{
    return this._http.post<any>(`api.openweathermap.org/data/2.5/forecast?lat=18.6298&lon=73.7997&appid=${environment.apiKey}`, data)
  }

  getApi = (data:any):Observable<any> =>{
    return this._http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=18.6298&lon=3.7997&appid=${environment.apiKey}`)
  }
}
