import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrepreneur } from '../models/entrepreneur';
import { Region } from '../models/region.enum';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurService {
 
  entrepreneurSelected: Entrepreneur;
  constructor(private http: HttpClient) { 
    this.entrepreneurSelected = new Entrepreneur("","",new Date(1990,0,1),"","",Region.REGIONMETROPOLITANA,[],[],"","","");
  }

  getUsers(){
    return this.http.get<Entrepreneur[]>("http://localhost:3000/entrepreneurs");
  }
  getEntrepreneur(id:number){
    return this.http.get<Entrepreneur>("http://localhost:3000/entrepreneurs/"+id+"?_embed=services");
  }
  addUser(user: Entrepreneur){
    return this.http.post("http://localhost:3000/entrepreneurs", user);
  }
  editUser(user: Entrepreneur) {
    return this.http.put("http://localhost:3000/entrepreneurs/"+user.id, user)
  }
  deleteUser(id: number){
    return this.http.delete("http://localhost:3000/entrepreneurs/"+id)
  }

}