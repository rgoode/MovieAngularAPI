import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import { MovieClientService } from '../movie-client.service';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {

  movie$ = this.movieClientService.getMovies();
  movies: Movie[] = [];


  constructor(private movieClientService: MovieClientService) { }


  ngOnInit(): void {
    this.movieClientService.getMovies().subscribe((movies: Movie[]) => {
      this.movies= movies;
    })
  }

}
