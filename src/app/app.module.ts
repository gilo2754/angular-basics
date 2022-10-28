import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MoviesModule } from './movies/movies.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MoviesModule],
  declarations: [AppComponent, HelloComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
