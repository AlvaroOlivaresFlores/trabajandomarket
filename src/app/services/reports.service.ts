import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from '../models/report';
@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  constructor(private http: HttpClient) {}

  getReports() {
    return this.http.get<Report[]>('http://localhost:3000/reports');
  }
  addReport(report: Report) {
    return this.http.post('http://localhost:3000/reports', report);
  }
}
