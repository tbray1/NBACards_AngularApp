import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiurl:string = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA'

  constructor(private http: HttpClient ) { }

  getTeams(): Observable<any>{
    
    return this.http.get<any>(this.apiurl).pipe(catchError(this.handleError))
  }
  
  handleError(error) {
    return throwError(error.message || "Server Error")
  }
}

