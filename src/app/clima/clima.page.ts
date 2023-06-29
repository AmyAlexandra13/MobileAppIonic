import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  clima: any;
  iconoClima: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo,do&units=metric&appid=edac29633ba578a5e9aa03fe9159364a';
    this.http.get(apiUrl).subscribe((response: any) => {
      this.clima = response;
    });
  }



}
