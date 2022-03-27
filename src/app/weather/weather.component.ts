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


  constructor(
    private fb: FormBuilder,
    private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherForm = this.fb.group({
      location: ['']
    })
  }

  weatherQuery(formValues: any){
    this.weatherService.getWeather(formValues.location).subscribe(data => console.log(data));
  }

}
