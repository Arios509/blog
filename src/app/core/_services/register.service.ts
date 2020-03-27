import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register = (body): Observable<any> => {
    return this.http.post(`/users/register`, body)
      .pipe(delay(500));
  }

  returnSuccess = () => {
    return 'success'
  }
}

