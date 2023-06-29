import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  nombre!: string;
  edad!: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  predecirEdad() {
    const apiUrl = `https://api.agify.io/?name=${encodeURIComponent(this.edad)}`;
     this.http.get(apiUrl).subscribe((response: any) => {
      this.edad = response.age;
      console.log(this.edad);
     });
  }


}
