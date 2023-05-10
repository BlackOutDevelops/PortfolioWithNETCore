import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getLanguages(repository: string, owner: string = 'BlackOutDevelops'): Observable<any> {
    return this.http.get<Language>(this.baseUrl + "github/" + repository + "/" + owner);
  }
}

interface Language {
  name: string;
  bytes: number;
}
