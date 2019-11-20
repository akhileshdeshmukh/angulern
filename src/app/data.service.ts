import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }
getdata()
{
  return this.http.get("http://localhost:4000/employee");
}
}
