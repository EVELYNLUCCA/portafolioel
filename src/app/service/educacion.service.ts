import { environment } from 'src/environments/environment';
import { Educacion } from './../model/educacion';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
URL = `${environment.apiURL}/`;

  constructor(private http: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.URL}educacion/ver/educacion`);
  }

  public details(): Observable<Educacion>{
    return this.http.get<Educacion>(`${this.URL}educacion/ver/educacion`);
  }

  public save(educacion:Educacion): Observable<any>{
    return this.http.post<any>(this.URL + 'educacion/nuevo/educacion', educacion)
  }

  public update(id:number, educacion:any): Observable<Educacion>{
    return this.http.put<Educacion>(`${this.URL}educacion/editar/${id}`, educacion);
  }

  public  delete(id:number): Observable<void>{
    return this.http.delete<void>(this.URL + `educacion/borrar/${id}`);
  }
}
