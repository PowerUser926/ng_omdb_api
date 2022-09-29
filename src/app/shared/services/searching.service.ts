import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';
import { MovieModel } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class SearchingService {
  searchingValues: any = null;
  loading = new Subject<boolean>();
  movies: MovieModel[] = [];
  moviesLoaded = new Subject<MovieModel[]>();
  movieNotFound = new Subject<boolean>();
  selectedMovie!: MovieModel;

  constructor(private http: HttpService) {}

  getMovies(name: string, year: string, type: string) {
    this.loadingMovies();
    this.setSearchingValues(name, year, type);

    this.http.getMovies(name, type, year).subscribe((data: any) => {
      if (data['Response'] === 'False') {
        this.loading.next(false);
        this.movieNotFound.next(true);
      } else {
        this.loading.next(false);
        this.movieNotFound.next(false);
        data['Search'].forEach((movie: MovieModel) => {
          this.getMovieByID(movie.imdbID);
        });
      }
    });
  }

  getMovieByID(movieID: string) {
    this.http.getMovieByID(movieID).subscribe((data: any) => {
      this.movies.push(data);

      this.moviesLoaded.next(this.movies.slice());
    });
  }

  loadingMovies() {
    this.loading.next(true);
    this.movies = [];
    this.moviesLoaded.next([]);
    this.movieNotFound.next(false);
  }

  setSearchingValues(name: string, year: string, type: string) {
    this.searchingValues = {
      movieName: name,
      movieYear: year,
      movieType: type,
    };
  }
}
