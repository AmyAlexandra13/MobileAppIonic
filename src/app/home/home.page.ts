import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public appPages = [
    { title: 'Caja', url: '/caja' },
    { title: 'Predecir genero', url: '/genero'},
    { title: 'Predecir edad', url: '/edad' },
    { title: 'Universidades', url: '/uni'},
    { title: 'Clima', url: '/clima' },
    { title: 'Noticias', url: '/noticias' },
    {title: 'Acerca de', url: '/acercade'}
  
  ];
  constructor() {}

}
