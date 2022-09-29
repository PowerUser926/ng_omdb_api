import { Component } from '@angular/core';

import { SearchingService } from './shared/services/searching.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchingService],
})
export class AppComponent {
  title = 'OMDB API';
}
