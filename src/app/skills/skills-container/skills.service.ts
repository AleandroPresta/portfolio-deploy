import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'https://raw.githubusercontent.com/AleandroPresta/static-api/master/api/v1/skills'

  getSkillSet1() {
    return this.http.get<Skill[]>(`${this.BASE_URL}/1/data.json`);
  }

  getSkillSet2() {
    return this.http.get<Skill[]>(`${this.BASE_URL}/2/data.json`);
  }
}
