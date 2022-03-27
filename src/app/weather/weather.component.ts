import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherForm!: FormGroup;
  public weatherData: any;
  public weatherImageUrl!: string;

  public weatherImages =
    {name: 'sunny', url: './src/assets/001-sunny.png'}



  constructor(
    private fb: FormBuilder,
    private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherForm = this.fb.group({
      location: ['']
    })
  }

  weatherQuery(formValues: any){
    this.weatherService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
      if(this.weatherData.current.weather_descriptions[0] === 'Clear'){
        this.weatherImageUrl = './assets/001-sunny.png'
      }else if (this.weatherData.current.weather_descriptions[0] === 'Fog'){
        this.weatherImageUrl = './assets/002-cloudy.png'
      }
    });
  }

}
