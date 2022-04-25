import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieClientService } from '../movie-client.service'
import { PostMovie } from '../models/Movie';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  public get movieClientService(): MovieClientService {
    return this._movieClientService;
  }
  public set movieClientService(value: MovieClientService) {
    this._movieClientService = value;
  }

  constructor(private _movieClientService: MovieClientService) { }


  addMovieFormGroup = new FormGroup({
    title: new FormControl('')
  })

  submitMovie(){
    const postMovie: PostMovie = this.addMovieFormGroup.value;
    this._movieClientService.postMovie(postMovie).subscribe();
  }
  ngOnInit(): void {
  }

}
