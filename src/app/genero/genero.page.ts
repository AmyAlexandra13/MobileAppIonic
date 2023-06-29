import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

nombre!: string;
generoPredicho!: string;


  constructor(private http: HttpClient) {
    
   }

   predecirGenero() {
    const apiUrl = `https://api.genderize.io/?name=${encodeURIComponent(this.nombre)}`;
     this.http.get(apiUrl).subscribe((response: any) => {
      this.generoPredicho = response.gender;
     });
  }


  ngOnInit() {

  }


  

}
