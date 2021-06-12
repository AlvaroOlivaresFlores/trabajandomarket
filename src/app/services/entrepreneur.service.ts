import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrepreneur } from '../models/entrepreneur';
import { Region } from '../models/region.enum';

@Injectable({
  providedIn: 'root',
})
export class EntrepreneurService {
  entrepreneurSelected: Entrepreneur;
  constructor(private http: HttpClient) {
    this.entrepreneurSelected = new Entrepreneur(
      '',
      '',
      new Date(1990, 0, 1),
      '',
      '',
      Region.REGIONMETROPOLITANA,
      [],
      [],
      '',
      '',
      '',
      false,
      0
    );
  }

  getEntrepreneurs() {
    return this.http.get<Entrepreneur[]>(
      'http://localhost:3000/entrepreneurs?_embed=services'
    );
  }
  getEntrepreneur(id: number) {
    return this.http.get<Entrepreneur>(
      'http://localhost:3000/entrepreneurs/' + id + '?_embed=services'
    );
  }
  deleteUser(id: number) {
    return this.http.delete('http://localhost:3000/entrepreneurs/' + id);
  }
}
