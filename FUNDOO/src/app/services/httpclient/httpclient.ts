import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  baseUrl = "https://fundoonotes.incubation.bridgelabz.com/api/";

  constructor(private http: HttpClient){}

  getMethod(endPoint: string, headers: HttpHeaders = new HttpHeaders()){
    return this.http.get(this.baseUrl + endPoint, {headers})
  }

  postMethod(endPoint: string, payLoad: any, headers: HttpHeaders = new HttpHeaders()) {
    return this.http.post(this.baseUrl + endPoint, payLoad, {headers});
  }
}