import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publication } from '../Publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/publications'

  getPublications() {
    return this.http.get<Publication[]>(`${this.BASE_URL}/data.json`);
  }

}
