import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = "http..."

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) {
    this.httpBase = this.http;
    this.urlapi = API;
  }

  public urlapi: string;
  public httpBase: HttpClient;
}