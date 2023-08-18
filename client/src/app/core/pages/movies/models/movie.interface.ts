export interface IMovieShortInfo {
  id: number;
  title: string;
  imdbRating: number;
  posterSmall: string;
  year: string;
  type: string;
  imdbId: string;
}


export interface IMovieFull extends IMovieShortInfo {
  description: string;
  actors: string[];
  genres: string[];
  countries: string[];
  translations: string;
  playlist: [];
  videoLength: number;
  directors: string[];
}
