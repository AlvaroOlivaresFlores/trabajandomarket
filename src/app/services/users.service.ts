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
    this.currentUserLog = new User("","",new Date,"","",Region.REGIONMETROPOLITANA,[])
  }

  getUsers(){
    return this.http.get<User[]>("http://localhost:3000/users");
  }
  getUser(id:number){
    return this.http.get<User>("http://localhost:3000/user/"+id);
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

  // para simular el inicio de secion de un usuario.
  setCurrentUserLog(currentUserLog: User){
    this.currentUserLog = currentUserLog;
  }
  getCurrentUserLog(){
    return this.currentUserLog;
  }

}
