import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  apiURL= environment.apiURL;

  constructor(private http: HttpClient) { }


public getPersona():Observable<persona[]>{
  return this.http.get<persona[]>(this.apiURL + '/persona/ver/persona');
}

public postPersona(body: any): Observable<any>{
  return this.http.post<any>(`${this.apiURL}/persona/nuevo/persona`, body)
}

public putPersona(body: any, id: number): Observable<any>{
  return this.http.put<any>(`${this.apiURL}/persona/editar/${id}`, body)
}

public deletePersona(id: number): Observable<void>{
  return this.http.delete<void>(`${this.apiURL}/persona/borrar/${id}`)
}
}
