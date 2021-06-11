import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from '../models/region.enum';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUserLog: User

  constructor(private http: HttpClient) { 
    this.currentUserLog = new User("","",new Date,"","",Region.REGIONMETROPOLITANA,[],"",false)
  }

  getUsers(){
    return this.http.get<User[]>("http://localhost:3000/users");
  }

  getUser(id:number){
    return this.http.get<User>("http://localhost:3000/users/"+id);
  }
  getUserRequests(id:number){
    return this.http.get<User>("http://localhost:3000/users/"+id+"?_embed=requests");
  }
  addUser(user: User){
    return this.http.post("http://localhost:3000/users", user);
  }
  editUser(user: User) {
    return this.http.put("http://localhost:3000/users/"+user.id, user)
  }
  deleteUser(id: number){
    return this.http.delete("http://localhost:3000/users/"+id)
  }
  login(email:string, password:string){
    return this.http.post<any>("http://localhost:3000/login", {email:email,password:password})
  }

  setCurrentUserLog(currentUserLog: User){
    this.currentUserLog = currentUserLog;
  }
  getCurrentUserLog(){
    return this.currentUserLog;
  }
}
