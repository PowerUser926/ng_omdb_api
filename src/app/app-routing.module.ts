import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchPageComponent } from './search-page/search-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
  { path: 'searching', component: SearchPageComponent },
  { path: 'details', component: DetailsPageComponent },
  { path: '', redirectTo: 'searching', pathMatch: 'full' },
  { path: '**', redirectTo: 'searching', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
