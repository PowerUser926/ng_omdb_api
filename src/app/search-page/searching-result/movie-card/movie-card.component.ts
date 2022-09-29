import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '../../../shared/models/movie.model';
import { SearchingService } from '../../../shared/services/searching.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: MovieModel;

  constructor(private searchingService: SearchingService) {}

  ngOnInit(): void {}

  selectMovie() {
    this.searchingService.selectedMovie = { ...this.movie };
  }
}
