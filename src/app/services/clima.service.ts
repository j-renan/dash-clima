import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  //private readonly http = inject(HttpClient)

  constructor(
    private http: HttpClient
  ) { }

  getDadosClima(cidade: string) {
    return this.http.get<any>(`${environment.apiClimaUrl}/clima/${cidade}`)
  }

}
