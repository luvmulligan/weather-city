import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_KEY } from './config';
import { throwError } from 'rxjs';


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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 615) {
      console.error('An error occurred: User requested a resource which does not exist.', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
