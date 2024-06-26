import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IsupportMessage} from "../../model/isupport-message";

@Injectable({
  providedIn: 'root'
})
export class SupportMessageService {
  baseUrl = 'http://localhost:8080/v1/api/support-tickets';
  constructor(private _http:HttpClient) { }

  getAll(): Observable<IsupportMessage[]>{
    return this._http.get<IsupportMessage[]>(this.baseUrl);
  }
}
