import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
API_KEY='dda968728e4ca24c03f71ca9bea978bd'


  constructor(private http: HttpClient) { }

  getWeather(location: string){
    return this.http.get(
      `http://api.weatherstack.com/current?access_key=${this.API_KEY}&query=${location}`
    )

  }
}
