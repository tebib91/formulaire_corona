import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  baseurl = 'https://covid19.knsd.digital/api/';
  formUrl = 'http://covid19.knsd.digital/api/?f=save_test';

  constructor(private https: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // POST
  Send(data): Observable<any> {
    return this.https.post<any>(this.baseurl + 'save.php', JSON.stringify(data), this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  updateback(data)
  : Observable<any> {
    return this.https.post<any>(this.baseurl + '?f=stats', JSON.stringify(data), this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  getAll(): Observable<any> {
    return this.https.get<any>(`${this.baseurl}?f=list`, this.httpOptions)
    .pipe(
      catchError(this.errorHandl)
    );
  }
  getData(data): Observable<any> {
    return this.https.get<any>(`${this.baseurl}?f=get&id=${data}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  getDeclarationList(page): Observable<any> {
      return this.https.get<any>(`${this.baseurl}/?f=list_tests&page=${page}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
  }
  // POST
  sendDataForm(data): Observable<any> {
    return this.https.post<any>(this.formUrl, JSON.stringify(data), this.httpOptions)
      .pipe(
        catchError(this.errorHandl)
      );
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
    return throwError(errorMessage);
  }
  get(endpoint: string) {
    return this.https.get(this.baseurl + endpoint);
  }
}
