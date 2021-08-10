import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8090/api/v1";
  constructor(private http:HttpClient) { }

  getAllUsers()
  {
    return this.http.get<any[]>(this.baseUrl+"/users");
  }
}
