import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Resto } from '../model/resto'

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  private ROOT_URL="http://localhost:3000/api/resto"

  private httpOptions={
    headers:new HttpHeaders().set("Content-Type","application/json")
    .set("auth-token",localStorage.getItem("token"))
  }

  constructor(private http: HttpClient) { }

  getRestos(): Observable<Resto[]> {
    return this.http.get<Resto[]>(this.ROOT_URL);
  }

  getResto(id: string) {
    return this.http.get<Resto>(`${this.ROOT_URL}/${id}`);


  }
  addResto(resto) {
    return this.http.post<any>(`${this.ROOT_URL}`, resto, this.httpOptions);
  }
  editResto(resto, id: string) {
    return this.http.put<any>(`${this.ROOT_URL}/${id}`, resto, this.httpOptions);
  }

  deleteResto(id: string) {
    return this.http.delete<any>(`${this.ROOT_URL}/${id}`, this.httpOptions);

  }
}
