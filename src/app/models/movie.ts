

export interface Movie{
    adult: boolean,
    backdrop_path: String,
    genre_ids: number[],
    id: String,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: number,
    poster_path: String,
    release_date: Date,
    title: String,
    video: boolean,
    vote_average: number,
    vote_count: number
  }

  export interface MovieDto{
    page:number, results: Movie[], total_results: number, total_pages: number
  }
