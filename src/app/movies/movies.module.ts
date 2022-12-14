import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { MovieService } from './movie.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MovieDetailsComponent, MovieOverviewComponent],
  declarations: [MovieDetailsComponent, MovieOverviewComponent],
  providers: [MovieService],
})
export class MoviesModule {}
