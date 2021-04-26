import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicesview',
  templateUrl: './servicesview.component.html',
  styleUrls: ['./servicesview.component.scss'],
})
export class ServicesviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  services = [
    {
      name: 'Servicio 1',
      description: '',
      price: 2000,
      category: 'Tecnologia',
    },
    {
      name: 'Servicio 2',
      description: '',
      price: 200000,
      category: 'Tecnologia',
    },
    {
      name: 'Servicio 3',
      description: '',
      price: 10000,
      category: 'Tecnologia',
    },
    {
      name: 'Servicio 4',
      description: '',
      price: 10000,
      category: 'Tecnologia',
    },
    {
      name: 'Servicio 5',
      description: '',
      price: 2000,
      category: 'Tecnologia',
    },
    {
      name: 'Servicio 6',
      description: '',
      price: 200000,
      category: 'Tecnologia',
    },
    {
      name: 'Servicio 7',
      description: '',
      price: 10000,
      category: 'Tecnologia',
    },
    {
      name: 'Servicio 8',
      description: '',
      price: 10000,
      category: 'Tecnologia',
    },
  ];
}
