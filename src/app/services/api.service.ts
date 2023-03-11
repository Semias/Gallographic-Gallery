import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  // albums = [];
  // error: any = null;

  getData() {
    return this.http.get('https://api.github.com/users/semias/repos').pipe(
      catchError((error) => {
        console.log(error);
        return throwError('Something went wrong on API');
      })
    );
  }

  // async ngOnInit() {
  //   try {
  //     const response = await axios.get(
  //       '​http://localhost:1337/api/albums?populate=*'
  //     );
  //     this.albums = response.data;
  //   } catch (error) {
  //     this.error = error;
  //   }
  // }
}
