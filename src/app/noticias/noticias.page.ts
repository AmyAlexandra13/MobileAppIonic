import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  noticias: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNews();
  }

  getNews()
  {
    const apiUrl = 'https://almomento.net/wp-json/wp/v2/posts?per_page=3';
    this.http.get<any []>(apiUrl).subscribe((response: any[]) => {
      this.noticias = response.map((noticia) => ({
        id: noticia.id,
        titulo: noticia.title.rendered,
        resumen: noticia.excerpt.rendered,
        enlace: noticia.link,
      }));
    });
  }
  
}
