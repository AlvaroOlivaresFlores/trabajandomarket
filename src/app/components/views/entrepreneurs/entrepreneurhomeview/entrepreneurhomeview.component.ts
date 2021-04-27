import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrepreneurhomeview',
  templateUrl: './entrepreneurhomeview.component.html',
  styleUrls: ['./entrepreneurhomeview.component.scss'],
})
export class EntrepreneurhomeviewComponent implements OnInit {
  navLinks = [
    { path: '/home/dashboard/myservices', label: 'Mis Servicios' },
    { path: '/home/dashboard/postservices', label: 'Publicar Servicios' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
