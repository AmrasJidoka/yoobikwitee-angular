import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Jidokan} from '../models/jidokan';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  backendBaseUrl = 'http://b933e794.ngrok.io';

  constructor(private http: HttpClient) {
  }

  findAllJidokans = (): Observable<Jidokan[]> => {
    return this.http.get<Jidokan[]>(`${this.backendBaseUrl}/jidokan/findall`);
  };

  findAllPresentJidokans = (): Observable<Jidokan[]> => {
    return this.http.get<Jidokan[]>(`${this.backendBaseUrl}/jidokan/findall/present`);
  };
}
