import { Injectable } from '@angular/core';
import { Pais } from '../models/pais.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.settings';

const baseUrlUtil  = AppSettings.API_ENDPOINT + "/util"



@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  listaPais(): Observable<Pais[]>{
    return this.http.get<Pais[]>(baseUrlUtil +"/pais")
}

  }

  