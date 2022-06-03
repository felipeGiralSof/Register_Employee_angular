import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { retry } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User, CreateUserDTO, UpdateUserDTO, Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private apiUrl = `${environment.API_URL}/employee`;

  constructor(
    private http: HttpClient
    ) { }

  create(dto: CreateUserDTO){
    return this.http.post<User>(this.apiUrl, dto);
  }

  getAllUsers(limit?: number, offset?: number){
    let params= new HttpParams();
    if(limit !== undefined && offset !==undefined){
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<User[]>(this.apiUrl, {params})
    .pipe(
      retry(3)
    );
  }

  // getUser(id: string){
  //   return this.http.get<User>(`${this.apiUrl}/${id}`);
  // }

  getProductsByPage(limit: number, offset: number){
    return this.http.get<Employee[]>(`${this.apiUrl}`, {
      params: {limit, offset}
    });
  }

  update(id: string, dto: UpdateUserDTO){
    return this.http.put<User>(`${this.apiUrl}/${id}`, dto);
  }
  delete(id: string){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
