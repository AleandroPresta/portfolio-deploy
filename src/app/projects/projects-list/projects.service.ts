import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/projects'

  getProjects() {
    return this.http.get<Project[]>(`${this.BASE_URL}/data.json`);
  }
}
