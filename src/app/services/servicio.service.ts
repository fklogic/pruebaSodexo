import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../interfaces/Noticia';
import { Listnoticias } from '../interfaces/Listnoticias';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {



  constructor(private http: HttpClient) { }

  obtenernoticas(url : string):Observable<Listnoticias> {
    return this.http.get<Listnoticias>(url)

  }
}
