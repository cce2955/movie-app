import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] =  [];
  upcomingMovies: Movie[] =  [];
  topRatedMovies: Movie[] =  [];

  constructor(private moviesService : MovieService) { }
  
  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((response) =>{
      this.popularMovies = response;
      console.log(this.popularMovies)
    });
    this.moviesService.getMovies('top_rated').subscribe((response) =>{
      this.upcomingMovies = response;
      console.log(this.upcomingMovies)
    });
    this.moviesService.getMovies('upcoming').subscribe((response) =>{
      this.topRatedMovies = response;
      console.log(this.topRatedMovies)
    });
  }

}
