import { MovieCard } from "./MovieCard";

interface Rating{
  Source: string,
  Value: string,
}

interface Movie{
  imdbID: string,
  Title: string,
  Poster: string,
  Runtime: string,
  Ratings: Rating[],
}

interface ContentProps{
  SelectedTitleGenre: string,
  Movies: Movie[],
}

export function Content({SelectedTitleGenre, Movies}: ContentProps) {
  return(
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {SelectedTitleGenre}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {Movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  );
}