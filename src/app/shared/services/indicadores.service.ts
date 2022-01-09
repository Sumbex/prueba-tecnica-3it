import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Indicador } from '../interfaces/indicador.interface';

@Injectable({
  providedIn: 'root',
})
export class IndicadoresService {
  private api: string = environment.api;
  constructor(private http: HttpClient) {}

  getIndicadores() {
    return this.http.get<Indicador[]>(`${this.api}`).pipe(
      map((res) => {
        const indicadores = [];
        for (const indicador in res) {
          if (typeof res[indicador] !== 'string') {
            indicadores.push(res[indicador]);
          }
        }
        return indicadores;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error.error);
      })
    );
  }

  getIndicador(indicador: string) {
    return this.http.get<Indicador>(`${this.api}/${indicador}`).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.error);
      })
    );
  }
}
