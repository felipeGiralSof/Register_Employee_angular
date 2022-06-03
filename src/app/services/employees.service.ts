import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import {Country, Employee, IdentificationType, WorkArea} from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<Employee[]>(`${environment.API_URL}/employee`);
  }

  getCountry() {
    return this.http.get<Country[]>(`${environment.API_URL}/country`);
  }

  getWorkArea() {
    return this.http.get<WorkArea[]>(`${environment.API_URL}/work_area`);
  }

  getIdentificationType() {
    return this.http.get<IdentificationType[]>(`${environment.API_URL}/identification_type`);
  }
}
