import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private ApiSkills = `${environment.apiURL}/skills/`;

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.ApiSkills}ver/skill`);
  }

  public createSkill(skills:Skills): Observable<Skills>{
    return this.http.post<Skills>(`${this.ApiSkills}nuevo/skill`, skills);
  }

  public deleteSkills(id: number): Observable<void>{
    return this.http.delete<void>(`${this.ApiSkills}borrar/${id}`);
  }

  public updateSkill(skills:FormData, id:number): Observable<Skills>{
    return this.http.put<Skills>(`${this.ApiSkills}editar/${id}`, skills);
  }
}
