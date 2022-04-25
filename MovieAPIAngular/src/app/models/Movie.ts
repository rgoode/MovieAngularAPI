import { MovieComponent } from "../movie/movie.component";

export interface Movie{
    movieId: number;
    movieTitle: string;

}
export type PostMovie = Omit<Movie, "movieId">;