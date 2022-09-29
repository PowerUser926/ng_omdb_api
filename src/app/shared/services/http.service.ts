import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getMovies(name: string, type: string, year: string) {
    year ? (year = '&y=' + year) : '';
    const url = `http://www.omdbapi.com/?apikey=ed42545a&s=${name}&type=${type}${year}&plot=full`;
    return this.http.get(url);
  }

  getMovieByID(movieID: string) {
    const url = `http://www.omdbapi.com/?apikey=ed42545a&i=${movieID}`;
    return this.http.get(url);
  }
}
