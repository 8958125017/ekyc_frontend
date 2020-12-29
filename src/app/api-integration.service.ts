import { Injectable } from '@angular/core';
import { ConstantModule} from './constants';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { retry, catchError } from 'rxjs/operators';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs';
import { Route, Router } from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};


@Injectable({
  providedIn: 'root'
})

export class ApiIntegrationService {


  constructor(private http: HttpClient,private constant:ConstantModule) { }
  public baseURL = this.constant.basePath;
 
  signup(data){
    return this.http.post(this.baseURL+'signup',data).pipe(
      retry(3)
    );
  }

  login(data){    
    return this.http.post(this.baseURL+'businesslogin',data, {
        headers: new HttpHeaders()
            .set('Content-Type', 'application/json'),
        observe: 'response'
    })
    .map(res => {    
      return res;        
    }).pipe(
      retry(3)         
    );
  }  

  registerKyc(data){
    return this.http.post(this.baseURL+'registerKyc',data).pipe(
      retry(3)
    );
  }
  getallKYC(data){
    return this.http.post(this.baseURL+'getallKYC',data).pipe(
      retry(3)
    );
  }
  
  getIssuedKyc(data){
    return this.http.post(this.baseURL+'getIssuedKyc',data).pipe(
      retry(3)
    );
  }

   searchKYC(data){
    return this.http.post(this.baseURL+'searchKYC',data).pipe(
      retry(3)
    );
  }

  getAllKycCount(data){
    return this.http.post(this.baseURL+'getAllKycCount',data).pipe(
      retry(3)
    );
  }

  getAllBusinessCount(data){
    return this.http.post(this.baseURL+'getAllBusinessCount',data).pipe(
      retry(3)
    );
  }
   getAllBusinessKycCount(data){
    return this.http.post(this.baseURL+'getAllBusinessKycCount',data).pipe(
      retry(3)
    );
  }

 }
