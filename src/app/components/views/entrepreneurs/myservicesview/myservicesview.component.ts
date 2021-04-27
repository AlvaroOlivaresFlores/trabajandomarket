import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myservicesview',
  templateUrl: './myservicesview.component.html',
  styleUrls: ['./myservicesview.component.scss'],
})
export class MyservicesviewComponent implements OnInit {
  cards = [
    {
      content:
        "Te ayudaré a hacer crecer tu negocio y tus redes sociales.",
      link:
        'https://www.asdeideas.es/wp-content/uploads/2017/08/herramientas-diseno-web-madrid-200x200.jpg',
      subtitle: 'Marketing Digital',
      title: 'Estrategia de Marketing',
      myprice: '$450',
    },
    {
      content:
        "Crearé un sitio web moderno de wordpress, un sitio de blogs, una página de destino, un módulo de aterrizaje",
      link:
        'https://www.asdeideas.es/wp-content/uploads/2017/08/herramientas-diseno-web-madrid-200x200.jpg',
      subtitle: 'Programacion y Tech',
      title: 'WordPress',
      myprice: '$450',
    },
    {
      content:
        "Haré búsquedas de propiedades y rastreo de omisión masiva para bienes raíces",
      link:
        'https://www.asdeideas.es/wp-content/uploads/2017/08/herramientas-diseno-web-madrid-200x200.jpg',
      subtitle: 'Negocio',
      title: 'Asistente Virtual',
      myprice: '$450',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
