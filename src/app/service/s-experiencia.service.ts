import { Experiencia } from './../model/experiencia';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  expURL = `${environment.apiURL}/experiencia/`

  constructor(private Http: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.Http.get<Experiencia[]>(this.expURL + 'ver/experiencia');
  }

  // public detail(id:number): Observable<Experiencia>{
  //   return this.Http.get<Experiencia>(this.expURL + `detail/${id}`)
  // }

  public save(experiencia:Experiencia): Observable<any>{
    return this.Http.post<any>(this.expURL + 'nuevo/experiencia', experiencia)
  }
public update(id:number, experiencia:FormData): Observable<any>{
    return this.Http.put<any>(this.expURL + `editar/${id}`, experiencia);
  }

  public delete(id:number): Observable<void>{
    return this.Http.delete<void>(this.expURL + `borrar/${id}`);
  }
}
