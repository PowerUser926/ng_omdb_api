import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../shared/models/movie.model';
import { SearchingService } from '../shared/services/searching.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})
export class DetailsPageComponent implements OnInit {
  movie!: MovieModel;

  constructor(private searchingService: SearchingService) {}

  ngOnInit() {
    this.movie = { ...this.searchingService.selectedMovie };
  }
}
