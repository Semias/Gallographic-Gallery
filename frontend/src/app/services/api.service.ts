import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://api.github.com/users/semias/repos').pipe(
      catchError((error) => {
        console.log(error);
        return throwError('Error');
      })
    );
  }
}
