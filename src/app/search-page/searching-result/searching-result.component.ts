import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchingService } from '../../shared/services/searching.service';
import { Subscription } from 'rxjs';

import { MovieModel } from '../../shared/models/movie.model';

@Component({
  selector: 'app-searching-result',
  templateUrl: './searching-result.component.html',
  styleUrls: ['./searching-result.component.css'],
})
export class SearchingResultComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  loadingSubscription!: Subscription;
  movies: MovieModel[] = [];
  movieSubscription!: Subscription;
  movieNotFound: boolean = false;
  notFoundSubscription!: Subscription;

  constructor(private searchingService: SearchingService) {}

  ngOnInit(): void {
    if (this.searchingService.movies) {
      this.movies = this.searchingService.movies;
    }

    this.movieSubscription = this.searchingService.moviesLoaded.subscribe(
      (movies) => (this.movies = movies)
    );

    this.loadingSubscription = this.searchingService.loading.subscribe(
      (loading) => (this.loading = loading)
    );

    this.notFoundSubscription = this.searchingService.movieNotFound.subscribe(
      (error) => (this.movieNotFound = error)
    );
  }

  ngOnDestroy() {
    this.movieSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
    this.notFoundSubscription.unsubscribe();
  }
}
