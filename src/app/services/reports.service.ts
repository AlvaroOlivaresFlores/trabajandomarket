import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Report} from '../models/report'
@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }

  getReports(){
    return this.http.get<Report[]>("http://localhost:3000/reports");
  }
  getReport(id:number){
    return this.http.get<Report>("http://localhost:3000/report/"+id);
  }
  addReport(report: Report){
    return this.http.post("http://localhost:3000/reports", report);
  }
  editReport(report: Report) {
    return this.http.put("http://localhost:3000/reports/"+report._id, report)
  }
  deleteReport(id: number){
    return this.http.delete("http://localhost:3000/reports/"+id)
  }
}
