import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchingService } from '../../shared/services/searching.service';

@Component({
  selector: 'app-searching-form',
  templateUrl: './searching-form.component.html',
  styleUrls: ['./searching-form.component.css'],
})
export class SearchingFormComponent implements OnInit {
  movieName = '';
  movieYear = '';
  movieType = 'Movie';

  constructor(private searchingService: SearchingService) {}

  ngOnInit(): void {
    if (this.searchingService.searchingValues) {
      this.movieName = this.searchingService.searchingValues.movieName;
      this.movieYear = this.searchingService.searchingValues.movieYear;
      this.movieType = this.searchingService.searchingValues.movieType;
    }
  }

  onSearch(f: NgForm) {
    this.searchingService.getMovies(
      f.value.movieName,
      f.value.movieYear,
      f.value.movieType
    );
  }
}
