import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // this.movieService.getMovies('popular', 20).subscribe(movies=>{
    //   this.movies = movies;
    // });
    this.getPagedMovies(1)
  
  }
  getPagedMovies(page: number){
    this.movieService.searchMovies(page).subscribe(movies=>{
      this.movies = movies;
    }) 
  }
  paginate(event: any){
    console.log(event);
    this.getPagedMovies(event.page +1);
  }

}
