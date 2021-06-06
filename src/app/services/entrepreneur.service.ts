import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrepreneur } from '../models/entrepreneur';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurService {
 
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<Entrepreneur[]>("http://localhost:3000/users");
  }
  getUser(id:number){
    return this.http.get<Entrepreneur>("http://localhost:3000/user/"+id);
  }
  addUser(user: Entrepreneur){
    return this.http.post("http://localhost:3000/users", user);
  }
  editUser(user: Entrepreneur) {
    return this.http.put("http://localhost:3000/users/"+user.id, user)
  }
  deleteUser(id: number){
    return this.http.delete("http://localhost:3000/users/"+id)
  }
}
