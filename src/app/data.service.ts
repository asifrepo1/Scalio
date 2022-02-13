import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
 
import { catchError } from 'rxjs/operators'
 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  dashboardData : any = [];
  public profileSubject = new Subject<any>()
  public http404 = new Subject<any>() ;
  constructor(private http : HttpClient) { }
  
  getDashboardData(searchKey : string){
    return this.http.get('https://api.github.com/search/users?q=' +searchKey ) 
  }

}
