import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uni',
  templateUrl: './uni.page.html',
  styleUrls: ['./uni.page.scss'],
})
export class UniPage implements OnInit {
  pais!: string;
  universidades: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  uni() {
    const apiUrl = `http://universities.hipolabs.com/search?country=${encodeURIComponent(this.pais)}`;
    this.http.get<any[]>(apiUrl).subscribe((response) => { //para conseguir el arreglo del tipo que lo envia la API
      this.universidades = response;
    });
  }


  
 

}
