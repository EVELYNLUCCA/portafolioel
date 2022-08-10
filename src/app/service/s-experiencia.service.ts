import { Experiencia } from './../model/experiencia';
import { EducacionComponent } from './../component/educacion/educacion.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  expURL = 'http://localhost:8080/experiencia/'

  constructor(private HttpClient: HttpClient) { }
  public lista(): Observable<Experiencia[]>{
    return this.HttpClient.get<Experiencia[]>(this.expURL + 'ver/experiencia');
  }
  public detail(id:number): Observable<Experiencia>{
    return this.HttpClient.get<Experiencia>(this.expURL + `detail/${id}`)
  }

  public save(experiencia:Experiencia): Observable<any>{
    return this.HttpClient.post<any>(this.expURL + 'crear/experiencia', experiencia)
  }
public update(id:number, experiencia:Experiencia): Observable<any>{
    return this.HttpClient.put<any>(this.expURL + `editar/${id}`, experiencia);
  }

  public delete(id:number): Observable<any>{
    return this.HttpClient.delete<any>(this.expURL + `borrar/${id}`);
  }
}
