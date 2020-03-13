import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  baseurl = 'http://covid19.knsd.digital/api/';

  constructor(private https: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  Send(data): Observable<any> {
    return this.https.post<any>(this.baseurl + 'save.php', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  get(endpoint: string) {
    return this.https.get(this.baseurl + endpoint);
  }
}
