import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieComponent } from './movie/movie.component';


const routes: Routes = [
  {
    path: "",
    component: MovieHomeComponent
  },
  {
    path: "movie/:id", 
    component: MovieComponent
  },
  {
    path: "add-Movie",
    component: AddMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }