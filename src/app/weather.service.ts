import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from './config';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(location: string){
    return this.http.get(
      `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${location}`
    )

  }
}
