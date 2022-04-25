import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostMovie, Movie } from './models/Movie';


@Injectable({
  providedIn: 'root'
})
export class MovieClientService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = "https://localhost:5001/api/Movie";


  getMovies() { 
    return this.httpClient.get<Array<Movie>>(`${this.baseUrl}/AllMovies`);
  }

  
  getMovie(id: number) { 
    return this.httpClient.get<Movie>(`${this.baseUrl}/${id}`);
  }


  postMovie(movie: PostMovie) {
    return this.httpClient.post<Movie>(this.baseUrl, movie);
  }

}