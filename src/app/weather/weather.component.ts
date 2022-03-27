import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    if (formValues.location === ''){
      return
    } else {
      this.weatherService.getWeather(formValues.location).subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);
        this.setWeatherImage();
      });
    }

  }
  setWeatherImage(){
    const weatherDescription = this.weatherData.current.weather_descriptions[0]
    if (weatherDescription === 'Sunny' || weatherDescription === 'Clear'){
      this.weatherImageUrl = './assets/001-sunny.png'
    } else if (weatherDescription === 'Partly cloudy'){
      this.weatherImageUrl = './assets/009-cloudy-2.png'
    } else if (weatherDescription === 'Shower In Vicinity'  || weatherDescription === 'Light rain' || weatherDescription === 'Moderate rain at times' || weatherDescription === 'Moderate rain'){
      this.weatherImageUrl = './assets/003-rainy.png'
    } else if (weatherDescription === 'Heavy rain at times' || weatherDescription === 'Heavy rain'){
      this.weatherImageUrl = './assets/008-rain.png'
    } else if (weatherDescription === 'Mist' || weatherDescription === 'Haze'){
      this.weatherImageUrl = './assets/mist.png'
    } else if (weatherDescription === 'Patchy light rain' || weatherDescription === 'Patchy rain possible'){
      this.weatherImageUrl = './assets/rain.png'
    } else if (weatherDescription === 'Cloudy' || weatherDescription === 'Fog' || weatherDescription === 'Overcast'){
      this.weatherImageUrl = './assets/010-cloud.png'
    } else if (weatherDescription == 'Thundery outbreaks possible'){
      this.weatherImageUrl = './assets/006-thunder.png'
    } else if (weatherDescription === 'Light Snow, Snow' || weatherDescription === 'Snow' || weatherDescription === 'Blowing snow' || weatherDescription === 'Blizzard' || weatherDescription === 'Snow, Light Snow'){
      this.weatherImageUrl = './assets/005-snow.png'
    } else if (weatherDescription === 'Patchy snow possible'){
      this.weatherImageUrl = './assets/snowing.png'
    }
  }
}
