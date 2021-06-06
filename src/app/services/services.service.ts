import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.enum';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  serviceSelected: Service;

  constructor(private http: HttpClient) { 
    this.serviceSelected = new Service("","",0,0,Category.NONE,["",""],false,0);
  }

  getServices(){
    return this.http.get<Service[]>("http://localhost:3000/services");
  }
  getService(id:number){
    return this.http.get<Service>("http://localhost:3000/service/"+id);
  }
  addService(service: Service){
    return this.http.post("http://localhost:3000/services", service);
  }
  editService(service: Service) {
    return this.http.put("http://localhost:3000/services/"+service.id,service)
  }
  deleteService(service: Service){
    return this.http.delete("http://localhost:3000/services/"+service.id)
  }
  
  setServiceSelected(service: Service){
    this.serviceSelected = service;
  }
  getServiceSelected(){
    return this.serviceSelected;
  }
}
