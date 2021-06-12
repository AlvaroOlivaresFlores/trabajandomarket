import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from '../models/request';


@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getRequests() {
    return this.http.get<Request[]>('http://localhost:3000/requests');
  }
  getRequest(id:number){
    return this.http.get<Request>("http://localhost:3000/requests/"+id);
  }
  getRequestedServices(id: number){
    return this.http.get<Request[]>("http://localhost:3000/requests?_expand=entrepreneur&_expand=service&userId="+id)
  }
  getRequestedEntrepreneur(id: number){
    return this.http.get<Request[]>("http://localhost:3000/requests?_expand=user&_expand=service&entrepreneurId="+id)
  } 
  addRequest(request: Request){
    return this.http.post("http://localhost:3000/requests", request);
  }
  editRequest(request: Request) {
    return this.http.put("http://localhost:3000/requests/"+request.id, request)
  }
  deleteRequest(id: number){
    return this.http.delete("http://localhost:3000/requests/"+id)
  }
}